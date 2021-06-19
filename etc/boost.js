// 부스트캠프 자가진단 문제 - 중복 횟수 리턴

// Map
function solution(arr) {
  let answer = [];
  let sh = new Map();
  arr.forEach((element) => {
    if (sh.has(element)) {
      sh.set(element, sh.get(element) + 1);
    } else {
      sh.set(element, 1);
    }
  });

  sh.forEach((value) => {
    console.log(value);
    if (value > 1) {
      answer.push(value);
    }
  });

  //   for (let [key, value] of sh) {
  //     console.log(key, value);
  //     if (value > 1) {
  //       answer.push(value);
  //     }
  //   }

  if (answer.length === 0) {
    answer.push(-1);
  }

  return answer;
}

let arr = [1, 2, 3, 3, 3, 3, 4, 4];
console.log(solution(arr));

//////
// Set + 함수 이용
function countNum(arr, num) {
  let count = 0;
  arr.forEach((e) => {
    if (e === num) {
      count++;
    }
  });
  return count;
}

function solution2(arr) {
  let answer = [];
  let set = new Set([]);
  arr.forEach((element) => {
    if (set.has(element)) {
      return;
    }
    set.add(element);
    let count = countNum(arr, element);
    if (count > 1) {
      answer.push(count);
    }
  });

  if (answer.length === 0) {
    answer.push(-1);
  }

  return answer;
}

let arr = [1, 2, 3, 3, 3, 3, 4, 4];
console.log(solution2(arr));
