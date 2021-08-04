function solution(m, n, board) {
  var answer = 0;
  // 1) 먼저 2x2들을 전부 찾기
  // 2) 바로제거하지 않고 기억만 해두기
  // 3) 제거하기 (0으로 만들기)
  // 4) 빈칸 땡기기
  // 2x2 가없을때까지 반복
  // 5) 체크에 푸시한게없으면 답구하고 빠져나가기

  // 먼저 배열에다가 저장
  let a = Array.from({ length: m }, () => Array(n).fill(0));
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      a[i][j] = board[i][j];
    }
  }

  while (true) {
    let check = [];
    for (let i = 0; i < m - 1; i++) {
      for (let j = 0; j < n - 1; j++) {
        let comp = a[i][j];
        if (comp === 0) continue;
        if (
          comp === a[i + 1][j] &&
          comp === a[i][j + 1] &&
          comp === a[i + 1][j + 1]
        ) {
          check.push([i, j]);
        }
      }
    }

    if (!check.length) {
      answer += a
        .map((arr) => {
          let count = arr.filter((v) => !v).length;
          return count;
        })
        .reduce((a, b) => a + b);
      break;
    }

    // 제거
    for (let [x, y] of check) {
      a[x][y] = 0;
      a[x][y + 1] = 0;
      a[x + 1][y] = 0;
      a[x + 1][y + 1] = 0;
    }

    // 배열 돌리기
    let b = Array.from({ length: n }, () => Array(m).fill(0));
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        b[i][j] = a[m - j - 1][i];
      }
    }

    // 배열 땡긴후
    b.map((arr) => {
      let i = 0;
      while (i < arr.length) {
        let idx = arr.indexOf(0);
        let x = arr.splice(idx, 1);
        arr.push(...x);
        i++;
      }
    });

    // 배열 다시돌리기 // 4*5
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        a[i][j] = b[j][m - 1 - i];
      }
    }
  }
  return answer;
}
