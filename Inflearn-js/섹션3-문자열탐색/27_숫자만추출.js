// 숫자만 추출

// 내풀이 - 알파벳일때만 가능이므로 x
function solution(s) {
  let answer = "";
  s = Number(s.toLowerCase().replace(/[a-z]/g, ""));
  answer = s;
  return answer;
}

let str = "g0en2T0s8eSoft";
console.log(solution(str));

//
// isNaN, parseInt
function solution(s) {
  // let answer = "";
  // for (let x of s) {
  //   if (!isNaN(x)) {
  //     answer += x;
  //   }
  // }
  return parseInt(answer);
}

let str = "g0en2T0s8eSoft";
console.log(solution(str));

// isNaN, Number
function solution(s) {
  let answer = 0;
  // for (let x of s) {
  //   if (!isNaN(x)) {
  //     answer = answer * 10 + Number(x);
  //   }
  // }
  return answer;
}

let str = "g0en2T0s8eSoft";
console.log(solution(str));
