function solution(n, money) {
  var answer = 0;

  // n보다 큰동전이 있는 경우?
  money = money.filter((v) => v <= n);

  let d = Array.from({ length: n + 1 }, () => 0);
  // d[i] = i원을 만드는 경우수
  d[0] = 1;

  for (let j = 0; j < money.length; j++) {
    for (let i = 1; i <= n; i++) {
      if (i >= money[j]) d[i] += d[i - money[j]] % 1000000007;
    }
  }

  return d[n];
}
