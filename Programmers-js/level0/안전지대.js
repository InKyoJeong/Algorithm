function solution(board) {
  const dx = [1, 1, 1, 0, -1, -1, -1, 0];
  const dy = [-1, 0, 1, 1, 1, 0, -1, -1];
  const n = board.length;
  const d = Array.from({ length: n }, () => Array(n).fill(0));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 1) {
        for (let k = 0; k < 8; k++) {
          d[i][j] = 1;
          const nx = i + dx[k];
          const ny = j + dy[k];
          if (0 <= nx && nx < n && 0 <= ny && ny < n) {
            d[nx][ny] = 1;
          }
        }
      }
    }
  }

  return d.reduce((acc, cur) => {
    acc += cur.filter((v) => v !== 1).length;
    return acc;
  }, 0);
}
