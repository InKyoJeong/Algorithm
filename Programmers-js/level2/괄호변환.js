function solution(p) {
  var answer = "";

  // 1
  if (p === "") return p;

  // 2: u(최소 균형), v로 분리
  let left = 0;
  let right = 0;
  let cut;
  for (let i = 0; i < p.length; i++) {
    if (p[i] === ")") {
      left++;
    }
    if (p[i] === "(") {
      right++;
    }
    if (left === right) {
      cut = i;
      break;
    }
  }

  let u = p.slice(0, cut + 1);
  let v = p.slice(cut + 1);

  // 3
  if (isCorrect(u)) {
    answer = u + solution(v);
    // 4
  } else {
    answer = "(" + solution(v) + ")";
    u = u.slice(1).slice(0, -1);
    for (let x of u) {
      if (x === "(") {
        answer += ")";
      } else {
        answer += "(";
      }
    }
  }

  return answer;
}

function isCorrect(str) {
  if (str[0] === ")") {
    return false;
  }
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") {
      stack.push(str[i]);
    } else {
      if (stack[stack.length - 1] === "(") {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  if (stack.length === 0) {
    return true;
  }
  return false;
}
