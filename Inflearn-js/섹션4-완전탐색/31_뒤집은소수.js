// 뒤집은 소수
// ▣ 입력예제 1
// 9
// 32 55 62 20 250 370 200 30 100
// ▣ 출력예제 1
// 23 2 73 2 3

// 내풀이
function isPrime(x) {
  if (x < 2) {
    return false;
  }
  // 또는 i <= Math.sqrt(x)
  for (let i = 2; i * i <= x; i++) {
    if (x % i === 0) {
      return false;
    }
  }
  return true;
}
function solution(arr) {
  let answer = [];
  for (let x of arr) {
    let temp = x;
    let reverseNum = 0;
    while (temp) {
      reverseNum = reverseNum * 10 + (temp % 10);
      temp = Math.floor(temp / 10);
    }
    if (isPrime(reverseNum)) {
      answer.push(reverseNum);
    }
  }

  return answer;
}

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));
// x 원본이 필요없기 때문에 temp로 따로 저장안해도 된다.

//
// 내장함수 다른풀이
function isPrime(x) {
  //...생략
}
function solution(arr) {
  let answer = [];
  // for (let x of arr) {
  //   let reverseNum = Number(x.toString().split("").reverse().join(""));
  //   if (isPrime(reverseNum)) {
  //     answer.push(reverseNum);
  //   }
  // }
  return answer;
}

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));
