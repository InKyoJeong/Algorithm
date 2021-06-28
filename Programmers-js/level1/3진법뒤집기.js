function solution(n) {
  let three = "";
  let answer = 0;

  while (n / 3 > 0) {
    three += n % 3;
    n = Math.floor(n / 3);
  }

  let threeBase = three;
  for (let i = threeBase.length - 1; i >= 0; i--) {
    answer += threeBase[i] * Math.pow(3, threeBase.length - 1 - i);
  }

  return answer;
}
// Math.pow(x,y) : 거듭제곱 계산. x의 y제곱

/////////
// 다른풀이
function solution(n) {
  return parseInt([...n.toString(3)].reverse().join(""), 3);
}
// toString(x) : 문자열로 변환 x기본값은 10진수
// parseInt(n,x) - 문자열을 숫자로. n을 x진법으로 읽어서 10진법으로 변환
