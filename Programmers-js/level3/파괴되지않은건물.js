function solution(board, skill) {
  const n = board.length;
  const m = board[0].length;
  const sumTable = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));

  skill.forEach((sk) => {
    const [type, x1, y1, x2, y2, degree] = sk;
    type === 1 ? (sumTable[x1][y1] -= degree) : (sumTable[x1][y1] += degree);
    type === 1
      ? (sumTable[x2 + 1][y2 + 1] -= degree)
      : (sumTable[x2 + 1][y2 + 1] += degree);
    type === 1
      ? (sumTable[x1][y2 + 1] += degree)
      : (sumTable[x1][y2 + 1] -= degree);
    type === 1
      ? (sumTable[x2 + 1][y1] += degree)
      : (sumTable[x2 + 1][y1] -= degree);
  });

  // 위->아래
  for (let j = 0; j <= m; j++) {
    for (let i = 0; i < n; i++) {
      sumTable[i + 1][j] = sumTable[i][j] + sumTable[i + 1][j];
    }
  }

  // 왼->오른
  for (let i = 0; i <= n; i++) {
    for (let j = 0; j < n; j++) {
      sumTable[i][j + 1] = sumTable[i][j] + sumTable[i][j + 1];
    }
  }

  let count = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (board[i][j] + sumTable[i][j] > 0) {
        count++;
      }
    }
  }

  return count;
}
