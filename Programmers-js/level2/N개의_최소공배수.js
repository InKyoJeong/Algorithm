function gcd(a, b) {
  if (b === 0) {
    return a;
  } else {
    return gcd(b, a % b);
  }
}

function solution(arr) {
  var answer = 0;
  let n = arr.length;

  let temp = arr[0];

  if (n === 1) {
    return temp;
  }

  for (let i = 1; i < n; i++) {
    temp = (temp * arr[i]) / gcd(temp, arr[i]);
  }

  return temp;
}
// 최대공배수는 a*b / 최대공약수
