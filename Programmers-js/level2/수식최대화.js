function count(a, b, op) {
  if (op === "-") {
    return a - b;
  }
  if (op === "+") {
    return a + b;
  }
  if (op === "*") {
    return a * b;
  }
}

function solution(expression) {
  let answer = [];

  const permutation = [
    ["+", "-", "*"],
    ["+", "*", "-"],
    ["-", "+", "*"],
    ["-", "*", "+"],
    ["*", "-", "+"],
    ["*", "+", "-"],
  ];

  let numArr = expression.split(/[^0-9]/).map((num) => +num);
  let opArr = expression.match(/[\+\-\*]/g);

  for (let permu of permutation) {
    let cpyNumArr = numArr.slice();
    let cpyOpArr = opArr.slice();

    for (let i = 0; i <= 2; i++) {
      while (true) {
        let permuIdx = cpyOpArr.findIndex((e) => e === permu[i]);
        if (permuIdx !== -1) {
          let result = count(
            cpyNumArr[permuIdx],
            cpyNumArr[permuIdx + 1],
            cpyOpArr[permuIdx]
          );
          cpyNumArr.splice(permuIdx, 2, result);
          cpyOpArr.splice(permuIdx, 1);
        } else {
          break;
        }
      }
    }
    answer.push(cpyNumArr[0]);
  }

  let temp = answer.map((e) => {
    if (e < 0) return -e;
    else return e;
  });

  answer = Math.max(...temp);

  // 다른풀이 : Math.abs
  // answer = answer.map((e) => Math.abs(e));
  // answer = Math.max(...answer);
  return answer;
}
