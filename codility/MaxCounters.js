// 66% 시간초과

function solution(N, A) {
  // 빈 배열 만들고
  // A[K]=X가 N보다 작거나같으면 X위치 1증가,
  // N+1이랑 같으면 모두 현재배열의 최대로 설정

  let d = Array.from({ length: N }, () => 0);

  for (let i = 0; i < A.length; i++) {
    let X = A[i];
    if (X <= N) {
      d[X - 1]++;
    }
    if (X === N + 1) {
      let maxNum = Math.max(...d);
      d = d.map((v) => (v = maxNum));
    }
  }
  return d;
}
