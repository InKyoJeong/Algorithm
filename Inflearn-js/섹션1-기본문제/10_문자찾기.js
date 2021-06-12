function solution(s, t) {
  let answer = 0;
  // for (let x of s) {
  //   if (x === t) {
  //     answer++;
  //   }
  // }
  return answer;
}
let str = "COMPUTERPROGRAMMING";
console.log(solution(str, "R"));

//
// split 사용 : 구분자로 나누면 나눠진 개수 - 1
function solution(s, t) {
  // let answer = 0;
  // answer = s.split(t).length - 1;
  return answer;
}
let str = "COMPUTERPROGRAMMING";
console.log(solution(str, "R"));
