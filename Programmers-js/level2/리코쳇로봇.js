function findPosition(table, position) {
  const x = table.findIndex((v) => v.includes(position));
  const y = table[x].split("").findIndex((v) => v === position);

  return [x, y];
}

function isInside(board, nx, ny, n, m) {
  return 0 <= nx && nx < n && 0 <= ny && ny < m && board[nx][ny] !== "D";
}

function solution(board) {
  const n = board.length;
  const m = board[0].length;
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  const check = Array.from({ length: n }, () => Array(m).fill(0));
  const [startX, startY] = findPosition(board, "R");

  const queue = [];
  queue.push([startX, startY]);
  check[startX][startY] = 1;

  let count = 1;
  while (queue.length) {
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const [x, y] = queue.shift();
      for (let k = 0; k < 4; k++) {
        let nx = x + dx[k];
        let ny = y + dy[k];
        while (isInside(board, nx, ny, n, m)) {
          nx += dx[k];
          ny += dy[k];
        }
        nx -= dx[k];
        ny -= dy[k];

        if (board[nx][ny] === "G") {
          return count;
        }
        if (board[nx][ny] === "." && check[nx][ny] === 0) {
          queue.push([nx, ny]);
          check[nx][ny] = 1;
        }
      }
    }
    count += 1;
  }

  return -1;
}
