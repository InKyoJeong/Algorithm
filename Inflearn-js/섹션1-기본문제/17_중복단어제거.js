// 중복단어제거

function solution(s) {
  let answer = [];
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) === i) {
      answer.push(str[i]);
    }
  }
  return answer;
}
let str = ["good", "time", "good", "time", "student"];
console.log(solution(str));

//
// filter
function solution(s) {
  let answer;
  answer = s.filter((v, i) => {
    if (s.indexOf(v) === i) {
      return v;
    }
  });
  return answer;
}
let str = ["good", "time", "good", "time", "student"];
console.log(solution(str));

//
// 바로 리턴
function solution(s) {
  let answer;
  answer = s.filter((v, i) => {
    return s.indexOf(v) === i;
  });
  return answer;
}
let str = ["good", "time", "good", "time", "student"];
console.log(solution(str));
