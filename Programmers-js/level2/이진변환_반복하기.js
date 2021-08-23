function solution(s) {
  var answer = [];

  // 0개수 제거 : 0제거 개수 저장
  // 1의 개수를 2진법으로 변환 : 변환횟수저장
  // 1될때까지 반복,

  let doCount = 0;
  let zeroCount = 0;

  while (s !== "1") {
    let arr = s.split("");
    zeroCount += arr.filter((v) => v === "0").length;
    arr = arr.filter((v) => v === "1");
    let sum = arr.reduce((a, b) => parseInt(a, 10) + parseInt(b, 10), 0);
    s = sum.toString(2);
    doCount++;
  }
  answer.push(doCount, zeroCount);
  return answer;
}

// 다른풀이 - 정규표현식
function solution(s) {
  var answer = [];
  let doCount = 0;
  let zeroCount = 0;

  while (s !== "1") {
    let temp = s.replace(/0/g, "");
    zeroCount += s.length - temp.length;
    doCount++;

    s = temp.length.toString(2);
  }
  answer.push(doCount, zeroCount);
  return answer;
}
