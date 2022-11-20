function getDiv(n, limit, power) {
  let count = 1;

  for (let i = 1; i <= n / 2; i++) {
    if (n % i === 0) {
      count++;
    }
  }

  if (count > limit) {
    return power;
  }

  return count;
}

function solution(number, limit, power) {
  let answer = 0;

  for (let i = 1; i <= number; i++) {
    answer += getDiv(i, limit, power);
  }

  return answer;
}

// 인사이트: 약수는 짝이 있다. n까지 모두탐색하면 시간초과.
