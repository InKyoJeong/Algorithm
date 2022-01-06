function solution(S) {
  const stack = [];

  for (let i = 0; i < S.length; i++) {
    const top = stack[stack.length - 1];

    if (S[i] === "{" || S[i] === "[" || S[i] === "(") {
      stack.push(S[i]);
    } else {
      if (S[i] === "}") {
        if (top === "{") {
          stack.pop();
        } else return 0;
      }
      if (S[i] === "]") {
        if (top === "[") {
          stack.pop();
        } else return 0;
      }
      if (S[i] === ")") {
        if (top === "(") {
          stack.pop();
        } else return 0;
      }
    }
  }

  if (stack.length) {
    return 0;
  }
  return 1;
}
