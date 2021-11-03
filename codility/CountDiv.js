// score 50%, correct 100%

function solution(A, B, K) {
  let count = 0;
  for (let i = A; i <= B; i++) {
    if (i % K === 0) {
      count++;
    }
  }
  return count;
}

// 100%
function solution(A, B, K) {
  let a = Math.ceil(A / K);
  let b = Math.ceil((B + 1) / K);
  return b - a;
}
