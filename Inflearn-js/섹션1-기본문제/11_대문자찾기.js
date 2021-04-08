// toUpperCase()
function solution(s) {
  let answer = 0;
  for (let x of s) {
    if (x === x.toUpperCase()) {
      answer++;
    }
  }
  return answer;
}
let str = "KoreaTimeGood";
console.log(solution(str));

//
// 아스키코드
function solution(s) {
  let answer = 0;
  for (let x of s) {
    let num = x.charCodeAt();
    if (num >= 65 && num <= 90) {
      answer++;
    }
  }
  return answer;
}
let str = "KoreaTimeGood";
console.log(solution(str));
