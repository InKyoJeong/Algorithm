function solution(weights, head2head) {
  // 먼저 승률을 구하고
  // 자기보다 무거운복서 이긴 횟수 구하고
  // 위에서 판결안나면, 자기 몸무게가 무거운 복서가 앞으로
  // 또 판결 안나면, 자기 번호가 작은게 앞으로
  let temp = [];

  head2head.forEach((v, i) => {
    let arr = v.split("");
    arr = arr.filter((result) => result !== "N");
    let total = arr.length;
    let winRate = 0;
    let win = arr.filter((result) => result === "W").length;
    if (total === 0) {
      winRate = 0;
    } else {
      winRate = win / total;
    }

    let winWeight = 0;
    for (let j = 0; j < v.length; j++) {
      if (v[j] === "W") {
        if (weights[i] < weights[j]) {
          winWeight++;
        }
      }
    }

    temp.push([i + 1, weights[i], Number(winRate), winWeight]);
  });

  temp.sort((a, b) => {
    if (a[2] === b[2]) {
      if (a[3] === b[3]) {
        if (a[1] === b[1]) {
          return a[0] - b[0];
        } else {
          return b[1] - a[1];
        }
      } else {
        return b[3] - a[3];
      }
    } else {
      return b[2] - a[2];
    }
  });
  let answer = [];
  answer.push(...temp.map((v) => v[0]));

  return answer;
}

// 정렬부분 다른방법
temp.sort((a, b) => {
  return b[2] - a[2] || b[3] - a[3] || b[1] - a[1] || a[0] || b[0];
});
