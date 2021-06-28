function solution(answers) {
  var answer = [];
  let temp = Array.from({ length: 3 }, () => 0);
  let n = answers.length;
  let a = [1, 2, 3, 4, 5];
  let b = [2, 1, 2, 3, 2, 4, 2, 5];
  let c = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  for (let i = 0; i < n; i++) {
    if (answers[i] === a[i % 5]) {
      temp[0]++;
    }
    if (answers[i] === b[i % 8]) {
      temp[1]++;
    }
    if (answers[i] === c[i % 10]) {
      temp[2]++;
    }
  }
  let maxNum = Math.max(...temp);
  for (let i = 0; i < 3; i++) {
    if (temp[i] === maxNum) {
      answer.push(i + 1);
    }
  }

  return answer;
}
