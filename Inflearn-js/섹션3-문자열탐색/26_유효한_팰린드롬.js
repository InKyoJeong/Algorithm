// 유효한 팰린드롬

function solution(s) {
  let answer = "YES";
  // 소문자가 아닌것들을 찾아서 빈문자열로
  // s = s.toLowerCase().replace(/[^a-z]/g, "");

  // if (s !== s.split("").reverse().join("")) {
  //   return "NO";
  // }
  return answer;
}

let str = "found7, time: study; Yduts; emit, 7Dnuof";
console.log(solution(str));
