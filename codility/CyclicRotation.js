// n === 0일때 없으면 점수 87%

// 100%
function solution(A, K) {
  let n = A.length;
  if (n === K || n === 0) {
    return A;
  }

  while (K) {
    let temp = A.pop();
    A.unshift(temp);
    K--;
  }
  return A;
}

// 100%
function solution(A, K) {
  let n = A.length;
  if (n === K || n === 0) {
    return A;
  }

  for (let i = 0; i < K; i++) {
    let temp = A[n - 1];
    for (let j = n - 1; j >= 0; j--) {
      A[j] = A[j - 1];
    }
    A[0] = temp;
  }

  return A;
}
