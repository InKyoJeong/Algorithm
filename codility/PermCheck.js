function solution(A) {
  // 순열에서 빠진수가 없으면 1, 있으면 0리턴
  A.sort((a, b) => a - b);
  for (let i = 0; i < A.length; i++) {
    if (A[i] !== i + 1) {
      return 0;
    }
  }
  return 1;
}
