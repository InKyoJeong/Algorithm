// 가장 짧은 문자거리
// ▣ 입력예제 1
// teachermode e
// ▣ 출력예제 1
// 1 0 1 2 1 0 1 2 2 1 0

function solution(s, t) {
  let answer = [];
  let p = 101;
  for (let x of s) {
    if (x === t) {
      p = 0;
      answer.push(p);
    } else {
      p++;
      answer.push(p);
    }
  }

  p = 101;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === t) {
      p = 0;
    } else {
      p++;
      answer[i] = Math.min(answer[i], p);
    }
  }

  return answer;
}

let str = "teachermode";
console.log(solution(str, "e"));

// 왼쪽으로부터 e와의 거리 먼저구하고 그다음 오른쪽으로부터 구해서 작은값 구하기.
