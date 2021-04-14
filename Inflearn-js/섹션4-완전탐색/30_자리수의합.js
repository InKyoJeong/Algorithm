// 자리수의 합
// ▣ 입력예제 1
// 7
// 128 460 603 40 521 137 123
// ▣ 출력예제 1
// 137

// 내 풀이
function solution(n, arr) {
  let answer = 0;
  let max = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < n; i++) {
    let sum = 0;
    let one = String(arr[i]).split("");
    for (let i = 0; i < one.length; i++) {
      sum += Number(one[i]);
    }
    if (sum > max) {
      max = sum;
      answer = arr[i];
    } else if (sum === max) {
      if (arr[i] > answer) {
        answer = arr[i];
      }
    }
  }
  return answer;
}

let arr = [137, 460, 603, 40, 521, 902, 123];
console.log(solution(7, arr));

//
// while + 나눗셈이용
function solution(n, arr) {
  let answer = 0;
  let max = Number.MIN_SAFE_INTEGER;
  for (let x of arr) {
    let sum = 0;
    let temp = x;
    while (temp) {
      sum += temp % 10;
      temp = Math.floor(temp / 10);
    }
    if (max < sum) {
      max = sum;
      answer = x;
    } else if (max === sum) {
      if (x > answer) {
        answer = x;
      }
    }
  }
  return answer;
}
let arr = [128, 460, 603, 40, 521, 902, 123];
console.log(solution(7, arr));

//
// reduce 이용
function solution(n, arr) {
  let answer = 0;
  let max = Number.MIN_SAFE_INTEGER;

  for (let x of arr) {
    let sum = x
      .toString()
      .split("")
      .reduce((a, b) => a + Number(b), 0);
    if (sum > max) {
      max = sum;
      answer = x;
    } else if (sum === max) {
      if (x > answer) {
        answer = x;
      }
    }
  }
  return answer;
}

let arr = [128, 460, 603, 40, 521, 902, 123];
console.log(solution(7, arr));
