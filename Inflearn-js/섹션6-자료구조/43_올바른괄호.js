// 올바른괄호

function solution(s) {
  let answer = "YES";
  // let stack = [];
  // let count = 0;
  // for (let x of s) {
  //   if (x === "(") {
  //     stack.push(x);
  //     count++;
  //   } else {
  //     stack.pop();
  //     count--;
  //     if (count < 0) {
  //       return "NO";
  //     }
  //   }
  // }
  // if (count !== 0) {
  //   return "NO";
  // }

  return answer;
}

let a = "(()(()))(()";
console.log(solution(a));

//Inf
function solution(s) {
  let answer = "YES";
  let stack = [];

  for (let x of s) {
    if (x === "(") {
      stack.push(x);
    } else {
      if (stack.length === 0) {
        return "NO";
      }
      stack.pop();
    }
  }
  if (stack.length > 0) {
    // 여는괄호 많을경우
    return "NO";
  }

  return answer;
}

let a = "(()(()))(()";
console.log(solution(a));
