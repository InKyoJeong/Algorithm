function checkColor(arr, brown) {
  if (arr[0] * 2 + arr[1] * 2 - 4 === brown) {
    return true;
  } else {
    return false;
  }
}

function solution(brown, yellow) {
  var answer = [];
  let sum = brown + yellow;
  let temp = [];

  // 가능한 경우를 모두 구하기
  for (let i = 3; i <= Math.floor(sum / 2); i++) {
    if (sum % i === 0) {
      temp.push([i, sum / i]);
    }
  }

  // 가능한 경우 추려내기
  temp = temp.filter((e) => e[0] >= e[1]);
  for (let x of temp) {
    if (x[1] === 2) {
      temp.pop();
    }
  }
  // 가능한 것 중에 색상을 체크하기
  for (let x of temp) {
    if (checkColor(x, brown)) {
      answer.push(...x);
    }
  }
  return answer;
}

/////
// 리팩토링
function solution(brown, yellow) {
  var answer = [];
  let sum = brown + yellow;

  for (let i = Math.floor(sum / 2); i >= 3; i--) {
    if (sum % i === 0 && sum / i >= i) {
      if ((sum / i + i) * 2 - 4 === brown) {
        answer.push(sum / i);
        answer.push(i);
      }
    }
  }
  return answer;
}
