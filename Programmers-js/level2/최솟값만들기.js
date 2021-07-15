// --시간초과--
// 가장 최소랑 가장 최대를 곱하기
// ans에 누적하기
// 가장 최소랑 가장 최대는 배열에서 빼기
function solution(A, B) {
  var answer = 0;

  while (A.length) {
    let minNum = Math.min(...A);
    let maxNum = Math.max(...B);
    answer += minNum * maxNum;
    let minNumIdx = A.findIndex((e) => e === minNum);
    let maxNumIdx = B.findIndex((e) => e === maxNum);

    A = [...A.slice(0, minNumIdx), ...A.slice(minNumIdx + 1)];
    B = [...B.slice(0, maxNumIdx), ...B.slice(maxNumIdx + 1)];
  }

  return answer;
}

// --통과--
// 하나는 오름차순, 하나는 내림차순 정렬해서
// 하나씩 곱하기
function solution(A, B) {
  var answer = 0;
  let n = A.length;
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);

  for (let i = 0; i < n; i++) {
    answer += A[i] * B[i];
  }

  return answer;
}
