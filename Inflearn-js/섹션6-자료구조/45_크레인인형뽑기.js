// 크레인 인형뽑기 (카카오)

function solution(board, moves) {
  let answer = 0;
  let stack = [];

  for (let i = 0; i < moves.length; i++) {
    let now = moves[i] - 1;
    for (let j = 0; j < board.length; j++) {
      if (board[j][now] !== 0) {
        if (stack[stack.length - 1] === board[j][now]) {
          stack.pop();
          answer += 2;
        } else {
          stack.push(board[j][now]);
        }
        board[j][now] = 0;
        break;
      }
    }
  }

  return answer;
}

let a = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];

let b = [1, 5, 3, 5, 1, 2, 1, 4];
console.log(solution(a, b));
