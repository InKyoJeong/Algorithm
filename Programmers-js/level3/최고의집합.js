function solution(n, s) {
  var answer = [];
  let remain = 0;
  if (s === 1 || n > s) {
    return [-1];
  }
  // 나눠떨어지는경우
  if (s % n === 0) {
    for (let i = 0; i < n; i++) {
      answer.push(s / n);
    }
    // 나눠떨어지지 않는경우
  } else {
    for (let i = 0; i < n; i++) {
      answer.push(Math.floor(s / n));
    }
    remain = s % n;
    for (let i = answer.length - 1; i >= 0; i--) {
      remain--;
      answer[i] += 1;

      if (remain <= 0) break;
    }
  }

  return answer;
}
