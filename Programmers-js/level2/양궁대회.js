function countScoreGap(lion, apeach) {
  let lionScore = 0;
  let apeachScore = 0;

  for (let i = 0; i < 11; i++) {
    if (lion[i] < apeach[i]) {
      apeachScore += 10 - i;
    }
    if (lion[i] > apeach[i]) {
      lionScore += 10 - i;
    }
  }

  return lionScore - apeachScore;
}

function solution(n, info) {
  let answer = [-1];
  let maxGap = 0;

  const arr = Array.from({ length: info.length }, () => 0);

  function DFS(L, arrow, arr) {
    if (arrow > n) {
      return;
    }
    if (arrow === 0) {
      const gap = countScoreGap(arr, info);
      if (gap > maxGap) {
        answer = arr;
        maxGap = gap;
      }
      return;
    }
    if (L === -1) {
      arr[10] += arrow;
      const gap = countScoreGap(arr, info);
      if (gap > maxGap) {
        answer = arr;
        maxGap = gap;
      }
      return arr;
    } else {
      for (let i = L; i >= 0; i--) {
        if (arrow >= info[i] + 1) {
          const arrCopy = [...arr];
          arrCopy[i] = info[i] + 1;
          DFS(i - 1, arrow - (info[i] + 1), arrCopy);
        }
      }
    }
  }
  DFS(10, n, arr);

  return answer;
}
