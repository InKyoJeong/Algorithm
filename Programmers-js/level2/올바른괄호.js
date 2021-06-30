function solution(s) {
  var answer = true;

  let stack = [];
  let count = 0;

  for (let x of s) {
    if (x === "(") {
      count++;
      stack.push(x);
    } else {
      count--;
      stack.pop();
      if (count < 0) {
        return false;
      }
    }
  }

  if (stack.length !== 0) {
    return false;
  }

  return answer;
}
