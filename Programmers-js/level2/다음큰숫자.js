function countOne(num) {
  let count = 0;
  let str = num.toString(2);
  for (let x of str) {
    if (x === "1") {
      count++;
    }
  }
  return count;
}

function solution(n) {
  var answer = 0;

  let temp = countOne(n);
  while (true) {
    for (let i = n + 1; i <= 1000000; i++) {
      if (countOne(i) === temp) {
        return i;
      }
    }
  }

  return answer;
}

// n을 2진수로 변환하고 1개수 저장
// n보다 큰 조건에서 while문을 돌면서 같은걸 찾으면 리턴
// 2진수로 변환하고 1개수 리턴하는 함수 만들기
