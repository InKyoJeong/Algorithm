function solution(price, money, count) {
  let answer = 0;
  let sum = 0;
  for (let i = 1; i <= count; i++) {
    sum += price * i;
  }

  answer = sum - money;
  if (answer < 0) {
    return 0;
  }
  return answer;
}
