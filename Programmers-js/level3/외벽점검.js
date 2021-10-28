function solution(n, weak, dist) {
  let answer = -1;
  const m = weak.length;
  const allWeak = Array.from({ length: 2 * m - 1 }, () => 0);

  for (let i = 0; i < 2 * m - 1; i++) {
    if (i < m) {
      allWeak[i] = weak[i];
    } else {
      allWeak[i] = weak[i - m] + n;
    }
  }

  dist.sort((a, b) => b - a);

  for (let i = 1; i <= dist.length; i++) {
    let permuArr = permutation(dist, i);
    for (let arr of permuArr) {
      for (let j = 0; j < m; j++) {
        let sliceWeak = allWeak.slice(j, j + m);
        for (let x of arr) {
          let limit = sliceWeak[0] + x;
          sliceWeak = sliceWeak.filter((e) => e > limit);
          if (sliceWeak.length === 0) {
            return i;
          }
        }
      }
    }
  }

  return answer;
}

function permutation(arr, m) {
  let n = arr.length;
  let temp = Array.from({ length: m }, () => 0);
  let check = Array.from({ length: n }, () => 0);
  let answer = [];

  function DFS(L) {
    if (L === m) {
      answer.push(temp.slice());
    } else {
      for (let i = 0; i < n; i++) {
        if (check[i] === 0) {
          check[i] = 1;
          temp[L] = arr[i];
          DFS(L + 1);
          check[i] = 0;
        }
      }
    }
  }
  DFS(0);
  return answer;
}

// [1,5,6,10] 13 17 18
// 출발지점마다 구간 추가
// 순열
// 구간 잘라서 멀리갈 수 있는 인원부터 투입
