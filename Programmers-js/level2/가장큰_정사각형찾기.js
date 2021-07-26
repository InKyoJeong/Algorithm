function solution(board) {
  let maxNum = board[0][0];

  for (let i = 1; i < board.length; i++) {
    for (let j = 1; j < board[0].length; j++) {
      if (board[i][j] === 1) {
        board[i][j] =
          Math.min(board[i][j - 1], board[i - 1][j], board[i - 1][j - 1]) + 1;
        if (maxNum < board[i][j]) {
          maxNum = board[i][j];
        }
      }
    }
  }
  console.log(board);
  console.log(maxNum);

  return maxNum * maxNum;
}
