// 53% : 시간초과 (correct 100%)
// Detected time complexity: O(N*N)
function solution(A) {
  let n = A.length;
  let min = 100000000;

  for (let i = 1; i < n; i++) {
    let front = A.slice(0, i).reduce((a, b) => a + b, 0);
    let end = A.slice(i).reduce((a, b) => a + b, 0);
    let result = Math.abs(front - end);
    min = Math.min(result, min);
  }

  return min;
}

// 100%
// Detected time complexity: O(N)
function solution(A) {
  let sum = A.reduce((a, b) => a + b, 0);
  let start = 0;
  let min = 1000000001;

  for (let i = 0; i < A.length - 1; i++) {
    start = start + A[i];
    let result = Math.abs(sum - start - start);
    min = Math.min(result, min);
  }

  return min;
}
