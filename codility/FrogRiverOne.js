function solution(X, A) {
  const n = A.length;
  const set = new Set();
  for (let i = 0; i < n; i++) {
    set.add(A[i]);

    if (set.size === X) {
      return i;
    }
  }

  return -1;
}
