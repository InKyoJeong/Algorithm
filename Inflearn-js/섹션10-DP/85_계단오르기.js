function solution(n) {
  let answer = 0;

  let d = Array.from({ length: n + 1 }, () => 0);

  d[1] = 1;
  d[2] = 2;

  //   d[n] : n번호 까지 가는 방법의수

  for (let i = 3; i <= n; i++) {
    d[i] = d[i - 1] + d[i - 2];
  }
  answer = d[n];

  return answer;
}

console.log(solution(7)); //21
