function evenNum(num) {
  let count = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      count++;
    }
  }
  if (count % 2 === 0) {
    return true;
  }
  return false;
}

function solution(left, right) {
  var answer = 0;

  for (let i = left; i <= right; i++) {
    if (evenNum(i)) {
      answer += i;
    } else {
      answer -= i;
    }
  }
  return answer;
}
