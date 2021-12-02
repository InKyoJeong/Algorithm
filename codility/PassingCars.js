// score 50%, 시간초과 (correct 100%)
function solution(A) {
  let answer = [];
  let temp = Array.from({ length: 2 }, () => 0);

  function DFS(L, p) {
    if (L === 2) {
      if (temp[0] >= temp[1] || A[temp[0]] !== 0 || A[temp[1]] !== 1) return;
      answer.push(temp.slice());
    } else {
      for (let i = p; i < A.length; i++) {
        temp[L] = i;
        DFS(L + 1, p + 1);
      }
    }
  }
  DFS(0, 0);
  if (answer.length > 1000000000) {
    return -1;
  }

  return answer.length;
}

// 100%
function solution(A) {
  let zeroCount = 0;
  let oneCount = 0;
  for (let x of A) {
    if (x === 0) {
      zeroCount++;
    } else {
      oneCount += zeroCount;
    }
  }
  if (oneCount > 1000000000) {
    return -1;
  }
  return oneCount;
}
