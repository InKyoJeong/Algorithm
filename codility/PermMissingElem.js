// 53%
// Map이용

// 100%
function solution(A) {
  let sumAll = ((A.length + 2) * (A.length + 1)) / 2;
  let sumA = A.reduce((a, b) => a + b, 0);
  return sumAll - sumA;
}
