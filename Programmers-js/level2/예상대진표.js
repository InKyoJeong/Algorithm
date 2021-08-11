function solution(n, a, b) {
  let num = [];

  while (n !== 1) {
    if (a === b) break;
    num.push([a, b]);

    if (a % 2 === 0) {
      a = a / 2;
    } else {
      a = (a + 1) / 2;
    }

    if (b % 2 === 0) {
      b = b / 2;
    } else {
      b = (b + 1) / 2;
    }

    n = n / 2;
  }

  return num.length;
}

// 다른풀이
function solution(n, a, b) {
  let answer = 0;
  while (a !== b) {
    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);
    answer++;
  }

  return answer;
}
