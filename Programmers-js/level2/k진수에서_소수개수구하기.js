function isPrime(num) {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function solution(n, k) {
  let answer = 0;
  const arr = n
    .toString(k)
    .split("0")
    .filter((v) => v !== "");

  arr.forEach((v) => {
    if (isPrime(v)) {
      answer++;
    }
  });

  return answer;
}
