function solution(n, left, right) {
  var answer = [];
  for (let i = left; i <= right; i++) {
    answer.push(Math.max(Math.floor(i / n) + 1, (i % n) + 1));
  }
  return answer;
}

// 123
// 223
// 333

// 123 223 333

// 1234
// 2234
// 3334
// 4444

// 1234 2234 3334 4444

// n이 천만이므로 직접 저장해서는 풀수x
// x,y에서 큰게 그 좌표
// 7/4 = 1+3 (1,3)
// 14/4 = 3 + 2 (3,2)
