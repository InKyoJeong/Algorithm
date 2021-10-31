function solution(N) {
  let answer = 0;
  let arr = N.toString(2).split(1);
  arr.pop();

  answer = Math.max(...arr.map((v) => v.length));
  return answer;
}
