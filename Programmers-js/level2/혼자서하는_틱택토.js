function checkCompleteLine(line) {
  const obj = {
    XXX: "x",
    OOO: "o",
  };
  return obj[line];
}

function getCompleteLine(board) {
  let x = 0;
  let o = 0;

  function countCompleteLine(line) {
    if (checkCompleteLine(line) === "x") {
      x++;
    }
    if (checkCompleteLine(line) === "o") {
      o++;
    }
  }

  // 가로
  board.forEach((line) => {
    countCompleteLine(line);
  });
  // 대각선
  let crossOne = "";
  let crossTwo = "";
  board.forEach((line, i) => {
    crossOne += line[i];
    crossTwo += line[2 - i];
  });
  countCompleteLine(crossOne);
  countCompleteLine(crossTwo);
  //세로
  for (let i = 0; i < 3; i++) {
    let line = "";
    for (let j = 0; j < 3; j++) {
      line += board[j][i];
    }
    countCompleteLine(line);
  }

  return [o, x];
}

function getCount(board) {
  let o = 0;
  let x = 0;

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[i][j] === "O") {
        o++;
      }
      if (board[i][j] === "X") {
        x++;
      }
    }
  }

  return [o, x];
}

function solution(board) {
  // OX 개수 차이가 2개 이상이 날때 or X가 1개이상 더 많을때
  // X가 이겼는데 o가 하나이상 많을때 or O가 이겼는데 ox 개수가 같을때
  const [co, cx] = getCompleteLine(board);
  const [o, x] = getCount(board);

  if (Math.abs(o - x) >= 2 || x > o) {
    return 0;
  }
  if ((cx === 1 && o > x) || (co === 1 && x === o)) {
    return 0;
  }

  return 1;
}
