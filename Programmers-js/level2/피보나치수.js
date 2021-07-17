// // 13,14 런타임에러
function solution(n) {
  let answer = 0;
  let memo = Array.from({ length: 100001 }, () => 0);

  function fibo(n) {
    if (n <= 1) {
      return n;
    } else {
      if (memo[n] > 0) {
        return memo[n];
      } else {
        memo[n] = (fibo(n - 1) + fibo(n - 2)) % 1234567;
        return memo[n];
      }
    }
  }
  return fibo(n);
}

//////
// DP
function solution(n) {
  var answer = 0;
  let d = Array.from({ length: 100001 }, () => 0);
  d[0] = 0;
  d[1] = 1;
  for (let i = 2; i <= n; i++) {
    d[i] = (d[i - 2] + d[i - 1]) % 1234567;
  }

  return (answer = d[n]);
}
