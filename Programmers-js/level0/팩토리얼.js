function factorial(num) {
  if (num <= 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}

function solution(n) {
  var answer = 0;

  for (let i = 0; i < 10; i++) {
    if (factorial(i + 1) <= n) {
      answer = i + 1;
    }
  }

  return answer;
}
