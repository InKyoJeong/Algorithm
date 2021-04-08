function solution(s) {
  let answer = "";
  for (let x of s) {
    if (x === x.toUpperCase()) {
      x = x.toLowerCase();
    } else {
      x = x.toUpperCase();
    }
    answer += x;
  }
  return answer;
}

console.log(solution("StuDY"));
