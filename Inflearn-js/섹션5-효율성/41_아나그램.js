// 아나그램

function solution(str1, str2) {
  let answer = "YES";
  let sh = new Map();
  for (let x of str1) {
    if (sh.has(x)) {
      sh.set(x, sh.get(x) + 1);
    } else {
      sh.set(x, 1);
    }
  }

  for (let x of str2) {
    if (!sh.has(x) || sh.get(x) === 0) {
      return "NO";
    }
    sh.set(x, sh.get(x) - 1);
  }

  return answer;
}

let a = "AbaAeCde";
let b = "baeeACAd";
console.log(solution(a, b));

// 존재하지 않으면 바로 No, 존재하면 개수 체크
// 값이 0 이면 처음문자열에는 없는데 두번째문자열에는 하나 더갖고있는것이므로 No
