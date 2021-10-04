function solution(n) {
  let answer = 0;
  // 1차원배열로 세로좌표 기준으로 생각
  // ex) 예시에서 [2,4,1,3] / 값이 열, 위치가 행
  // 같은열인것 제외, 대각선인것 제외
  // 행의차와 열의차가 동일한게 대각선좌표

  function DFS(arr, L) {
    if (L === n) {
      answer++;
    } else {
      for (let i = 1; i <= n; i++) {
        arr[L + 1] = i;
        if (isValid(arr, L + 1)) {
          DFS(arr, L + 1);
        }
      }
    }
  }

  function isValid(arr, L) {
    for (let i = 1; i < L; i++) {
      if (arr[L] === arr[i]) {
        return false; // 다음칸인 L이 그 전에 나왔던거면 같은열/행이므로.
      }
      if (Math.abs(arr[i] - arr[L]) === Math.abs(i - L)) {
        return false; // 대각선이면
      }
    }
    return true;
  }

  for (let i = 1; i <= n; i++) {
    let arr = Array.from({ length: n + 1 }, () => 0);
    arr[1] = i;
    DFS(arr, 1);
  }

  return answer;
}
