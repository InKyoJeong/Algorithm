// 효율성 실패
// n이 0될때까지 최대값 하나씩 줄이기

function solution(n, works) {
  while (n) {
    let max = Math.max(...works);
    let idx = works.findIndex((v) => v === max);
    works[idx] -= 1;
    if (works[idx] < 0) {
      return 0;
    }
    n--;
  }

  let sum = 0;
  for (let x of works) {
    sum += x * x;
  }
  return sum;
}

// 다른풀이: 효율성 성공
// 먼저 sort 해서 최대값구하고 -1씩
function solution(n, works) {
  let max = works.sort((a, b) => b - a)[0];

  while (n) {
    for (let i = 0; i < works.length; i++) {
      if (works[i] === max) {
        works[i] -= 1;
        n--;
      }
      if (!n) break;
    }
    max--;
    if (!max) break;
  }

  return works.reduce((acc, cur) => acc + cur * cur, 0);
}
