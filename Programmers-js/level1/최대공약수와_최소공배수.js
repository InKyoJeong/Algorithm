function solution(n, m) {
  var answer = [];

  // 최소공배수 = 두수의 곱 / 최대공약수
  function gcd(a, b) {
    if (b === 0) {
      return a;
    } else {
      return gcd(b, a % b);
    }
  }
  let min = gcd(n, m);
  let max = (n * m) / min;
  answer.push(min);
  answer.push(max);

  return answer;
}
