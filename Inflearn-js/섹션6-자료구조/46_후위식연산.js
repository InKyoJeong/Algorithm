// 후위식 연산 (postfix)
function solution(s) {
  let answer;
  // let stack = [];

  // for (let x of s) {
  //   if (Number(x)) {
  //     stack.push(x);
  //   } else {
  //     let rt = stack.pop();
  //     let lt = stack.pop();
  //     if (x === "+") {
  //       stack.push(Number(lt) + Number(rt));
  //     } else if (x === "-") {
  //       stack.push(Number(lt) - Number(rt));
  //     } else if (x === "*") {
  //       stack.push(Number(lt) * Number(rt));
  //     } else {
  //       stack.push(Number(lt) / Number(rt));
  //     }
  //   }
  // }
  // answer = stack[stack.length - 1];

  return answer;
}

let str = "352+*9-";
console.log(solution(str));

///////
// Inf
function solution(s) {
  let answer;
  let stack = [];
  for (let x of s) {
    if (!isNaN(x)) {
      stack.push(Number(x));
    } else {
      let rt = stack.pop();
      let lt = stack.pop();
      if (x === "+") stack.push(lt + rt);
      else if (x === "-") stack.push(lt - rt);
      else if (x === "*") stack.push(lt * rt);
      else if (x === "/") stack.push(lt / rt);
    }
  }
  answer = stack[0];
  return answer;
}

let str = "352+*9-";
console.log(solution(str));
