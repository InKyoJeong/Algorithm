function solution(n) {
  var answer = 0;

  let p = 1;
  while (true) {
    let sum = 0;
    for (let i = p; i <= n; i++) {
      sum += i;
      if (sum === n) {
        answer++;
        p++;
        break;
      }
      if (sum > n) {
        p++;
        break;
      }
    }
    if (p > n) {
      break;
    }
  }

  return answer;
}

// 다른풀이
function solution(n) {
  var answer = 0;

  let p = 1;
  while (p <= n) {
    let sum = 0;
    for (let i = p; sum <= n; i++) {
      sum += i;
      if (sum === n) {
        answer++;
      }
    }
    p++;
  }

  return answer;
}

// 효율성 테스트 시간초과
function solution(n) {
  var answer = 0;

  for (let i = 1; i <= n; i++) {
    let sum = 0;
    for (let j = i; j <= n; j++) {
      sum += j;
      if (sum === n) {
        answer++;
      }
    }
  }

  return answer;
}
