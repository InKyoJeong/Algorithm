function solution(need, plan) {
  let answer = "YES";
  // let save = [];
  // let compare = [];

  // for (let i = 0; i < need.length; i++) {
  //   save.push(need[i]);
  // }
  // for (let i = 0; i < plan.length; i++) {
  //   if (save.includes(plan[i])) {
  //     compare.push(plan[i]);
  //   }
  // }
  // for (let i = 0; i < need.length; i++) {
  //   if (save[i] !== compare[i]) {
  //     return "NO";
  //   }
  // }
  return answer;
}

let a = "CBA";
let b = "CBDAGE";

console.log(solution(a, b));

////////
//Inf

function solution(need, plan) {
  let answer = "YES";
  let queue = need.split("");
  for (let x of plan) {
    if (queue.includes(x)) {
      if (queue.shift() !== x) {
        return "NO";
      }
    }
  }
  if (queue.length > 0) {
    return "NO";
  }

  return answer;
}

let a = "CBA";
let b = "CBDAGE";

console.log(solution(a, b));

// 큐 하나만 만들어서 맨앞 뺄때 비교, 필수과목 빠뜨렸을경우는 큐에 남으므로 마지막에 체크
// split으로 한번에 담기
