function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  // a를 중복제거하고 오름차순 정렬
  // 개수 0개거나 첫번째 1이아니면 무조건1 리턴
  // 개수가 1개일때, 1개보다 많을때 검사

  A = [...new Set(A)].filter((v) => v > 0).sort((a, b) => a - b);
  const n = A.length;

  if (A[0] !== 1 || n === 0) {
    return 1;
  }

  if (n === 1) {
    if (A[0] === 1) {
      return 2;
    }
  }

  for (let i = 0; i < n; i++) {
    if (A[i] !== i + 1) {
      return A[i - 1] + 1;
    }
  }

  return A[n - 1] + 1;
}
