// for 이용
function solution(s) {
  let answer = "";
  for (let x of s) {
    if (x === "A") {
      answer += "#";
    } else {
      answer += x;
    }
  }
  return answer;
}
let str = "BANANA";
console.log(solution(str));

// replace()함수는 제일 먼저 일차하는 패턴만 변환 후 바꿀뿐 모든 텍스트를 바꾸지는 않음.
// 따라서 정규표현식 + replace 이용
// string 은 값이 복사되는것. 주소참조 아니므로 s = s.replace하면 안됨
function solution(s) {
  let answer = s;
  answer = answer.replace(/A/g, "#");
  console.log(s);
  return answer;
}
let str = "BANANA";
console.log(solution(str));
