function solution(a, b) {
  let answer = 1234567890;
  let n = a.length;
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += a[i] * b[i];
  }
  answer = sum;

  return answer;
}

// reduce
function solution(a, b) {
  let answer = a.reduce((acc, _, i) => {
    return (acc += a[i] * b[i]);
  }, 0);
  return answer;
}
