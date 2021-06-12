// 회문 문자열

// for문
function solution(s) {
  let answer = "YES";
  // s = s.toLowerCase();
  // let len = s.length;
  // for (let i = 0; i < Math.floor(len / 2); i++) {
  //   if (s[i] !== s[len - i - 1]) {
  //     return "NO";
  //   }
  // }
  return answer;
}

let str = "goooG";
console.log(solution(str));

//
// reverse 메서드 사용
function solution(s) {
  // let answer = "YES";
  // s = s.toLowerCase();
  // if (s !== s.split("").reverse().join("")) {
  //   return "NO";
  // }
  return answer;
}

let str = "gooot";
console.log(solution(str));
