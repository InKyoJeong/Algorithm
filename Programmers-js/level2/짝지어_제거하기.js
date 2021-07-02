function solution(s) {
  var answer = 0;
  let stack = [];
  for (let x of s) {
    if (stack[stack.length - 1] === x) {
      stack.pop();
    } else {
      stack.push(x);
    }
  }
  if (stack.length === 0) {
    return 1;
  }
  return answer;
}
