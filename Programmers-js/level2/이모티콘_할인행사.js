function solution(users, emoticons) {
  const answer = [];
  const n = emoticons.length;
  const minRate = users.reduce((acc, cur) => {
    if (acc > cur[0]) {
      acc = cur[0];
    }
    return acc;
  }, 40);
  const rate = [10, 20, 30, 40].filter((num) => num >= minRate);
  const temp = Array(n).fill(0);

  function countAmount(array) {
    const result = Array(2).fill(0);

    users.forEach(([userRate, userMoney]) => {
      let count = 0;
      emoticons.forEach((emoticon, i) => {
        if (userRate <= array[i]) {
          count += (emoticon * (100 - array[i])) / 100;
        }
      });

      if (count >= userMoney) {
        result[0]++;
      } else {
        result[1] += count;
      }
    });

    answer.push(result);
  }

  function DFS(L) {
    if (L === n) {
      countAmount(temp);
    } else {
      for (let i = 0; i < rate.length; i++) {
        temp[L] = rate[i];
        DFS(L + 1);
      }
    }
  }
  DFS(0);

  return answer.sort((a, b) => {
    return a[0] === b[0] ? b[1] - a[1] : b[0] - a[0];
  })[0];
}
