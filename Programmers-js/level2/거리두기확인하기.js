function bfs(x, y, place) {
  let dx = [-1, 0, 1, 0];
  let dy = [0, 1, 0, -1];
  let queue = [];
  let a = Array.from({ length: 5 }, () => Array(5).fill(0));
  let ch = Array.from({ length: 5 }, () => Array(5).fill(0));

  queue.push([x, y]);
  ch[x][y] = 1;
  while (queue.length) {
    let [x, y] = queue.shift();
    for (let k = 0; k < 4; k++) {
      let nx = x + dx[k];
      let ny = y + dy[k];
      if (0 <= nx && nx < 5 && 0 <= ny && ny < 5 && ch[nx][ny] === 0) {
        if (place[nx][ny] === "P") {
          return false;
        }
        if (place[nx][ny] === "O") {
          a[nx][ny] = a[x][y] + 1;
          if (a[nx][ny] !== 2) {
            queue.push([nx, ny]);
            ch[nx][ny] = 1;
          }
        }
      }
    }
  }
  return true;
}

function solution(places) {
  var answer = [];
  let n = places.length;
  for (let i = 0; i < n; i++) {
    let x = places[i];
    let check = 1;
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < n; k++) {
        if (x[j][k] === "P") {
          if (bfs(j, k, x) === false) {
            check = 0;
          }
        }
      }
    }

    if (check === 0) {
      answer.push(0);
    } else {
      answer.push(1);
    }
  }
  return answer;
}

// 상우하좌 이동만 가능하다고 치고, 사이에 2보다 작으면 거리두기 지키지않은것
// 그러면 1일때는 한칸씩 계속 탐색, 합이 2이상이되면 빠져나오기,
// 2보다작은데 p를 발견하면 거리두기 지키지않은것
