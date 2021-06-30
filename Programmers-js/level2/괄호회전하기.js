function isCorrect(str) {
  let stack = [];
  for (let x of str) {
    if (x === "(" || x === "[" || x === "{") {
      stack.push(x);
    } else {
      if (stack.length === 0) {
        return false;
      }
      if (x === ")" && stack[stack.length - 1] === "(") {
        stack.pop();
      }
      if (x === "]" && stack[stack.length - 1] === "[") {
        stack.pop();
      }
      if (x === "}" && stack[stack.length - 1] === "{") {
        stack.pop();
      }
    }
  }

  if (stack.length !== 0) {
    return false;
  }
  return true;
}

function solution(s) {
  let n = s.length;
  let count = 0;
  let queue = [];

  for (let i = 0; i < n; i++) {
    queue.push(s[i]);
  }

  for (let i = 0; i < n; i++) {
    let str = queue.join("");
    if (isCorrect(str)) {
      count++;
    }
    let x = queue.shift();
    queue.push(x);
  }
  return count;
}
