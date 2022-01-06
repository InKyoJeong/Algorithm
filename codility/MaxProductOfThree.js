function solution(A) {
  const n = A.length;
  A.sort((a, b) => a - b);

  const front = A[0] * A[1] * A[n - 1];
  const back = A[n - 1] * A[n - 2] * A[n - 3];

  if (front > back) {
    return front;
  }

  return back;
}
