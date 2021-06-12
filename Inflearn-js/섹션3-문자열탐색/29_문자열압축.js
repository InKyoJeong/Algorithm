// 문자열 압축

function solution(s) {
  let answer = "";
  // let zip = 1;
  // s = s + " ";
  // for (let i = 0; i < s.length - 1; i++) {
  //   if (s[i] === s[i + 1]) {
  //     zip++;
  //   } else {
  //     answer += s[i];
  //     if (zip > 1) {
  //       answer += String(zip);
  //     }
  //     zip = 1;
  //   }
  // }
  return answer;
}
let str = "KKHSSSSSSSE";
console.log(solution(str));

// 못한부분: 뒤에 " " 빈문자열 추가, String으로 변환
