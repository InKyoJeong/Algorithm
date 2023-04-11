function solution(k, tangerine) {
  let answer = 0;

  const sH = {};
  tangerine.forEach((item) => {
    if (sH[item]) {
      sH[item]++;
    } else {
      sH[item] = 1;
    }
  });

  const sortedSize = Object.values(sH).sort((a, b) => b - a);
  let temp = k;

  for (let i = 0; i < sortedSize.length; i++) {
    temp -= sortedSize[i];
    answer++;

    if (temp <= 0) {
      return answer;
    }
  }

  return answer;
}
