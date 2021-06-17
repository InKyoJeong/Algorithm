function solution(board) {
  let answer = 0;
  //   let n = board.length;
  //   let dx = [-1, 0, 1, 0, -1, -1, 1, 1]; // 상우하좌, 대각 왼/오/오아래/왼아래
  //   let dy = [0, 1, 0, -1, -1, 1, 1, -1];

  //   function DFS(x, y) {
  //     board[x][y] = 0;
  //     for (let k = 0; k < 8; k++) {
  //       let nx = x + dx[k];
  //       let ny = y + dy[k];
  //       if (nx >= 0 && nx < n && ny >= 0 && ny < n && board[nx][ny] === 1) {
  //         DFS(nx, ny);
  //       }
  //     }
  //   }

  //   for (let i = 0; i < n; i++) {
  //     for (let j = 0; j < n; j++) {
  //       // 섬 발견하면 답+1하고, 재귀들어가서 다 0만들기. 그니까 재귀가 몇번호출되느냐가 답
  //       if (board[i][j] === 1) {
  //         answer++;
  //         DFS(i, j);
  //       }
  //     }
  //   }

  return answer;
}

let arr = [
  [1, 1, 0, 0, 0, 1, 0],
  [0, 1, 1, 0, 1, 1, 0],
  [0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 1, 0, 0],
  [1, 0, 1, 0, 1, 0, 0],
];

console.log(solution(arr));
