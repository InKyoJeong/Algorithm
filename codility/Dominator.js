function solution(A) {
  const answer = [];
  const n = A.length;
  const sH = new Map();

  for (let i = 0; i < n; i++) {
    if (sH.has(A[i])) {
      sH.get(A[i]).push(i);
    } else {
      sH.set(A[i], [i]);
    }
  }

  for (let [key, value] of sH) {
    if (value.length > Math.floor(n / 2)) {
      return value[0];
    }
  }
  return -1;
}
