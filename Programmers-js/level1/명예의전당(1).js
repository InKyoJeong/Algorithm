function solution(k, score) {
  const rank = [];
  const temp = [];

  for (let i = 0; i < score.length; i++) {
    if (temp.length === k) {
      if (temp[k - 1] < score[i]) {
        temp[k - 1] = score[i];
        temp.sort((a, b) => b - a);
      }
      rank.push(temp[k - 1]);
    } else {
      temp.push(score[i]);
      temp.sort((a, b) => b - a);
      rank.push(temp[temp.length - 1]);
    }
  }

  return rank;
}

// 꼭 k개만 넣을필요없다. 랭킹이 쭉 있다고 생각하기
function solution(k, score) {
  const rank = [];
  const temp = [];

  for (let i = 0; i < score.length; i++) {
    temp.push(score[i]);
    temp.sort((a, b) => b - a);

    if (temp.length > k) {
      rank.push(temp[k - 1]);
    } else {
      rank.push(temp[temp.length - 1]);
    }
  }

  return rank;
}
