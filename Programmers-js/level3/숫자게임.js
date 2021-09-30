function solution(A, B) {
  var answer = 0;

  A.sort((a, b) => b - a);
  B.sort((a, b) => b - a);

  let i = A.length - 1;
  while (i >= 0) {
    if (B.length === 0) {
      break;
    }
    if (A[i] < B[B.length - 1]) {
      B.pop();
      answer++;
      i--;
    } else {
      B.pop();
    }
  }

  return answer;
}

// 953 1
// 862 2
// AB를 내림차순 정렬하고 끝부터 큰거찾기 승점+1, B는 pop
// 없으면 pop
// 7777
// 8222
