// 홀수
// 7개의 자연수가 주어질 때, 이들 중 홀수인 자연수들을 모두 골라 그 합을 구하고, 고른 홀수들
// 중 최소값

function solution(arr) {
  let answer = [];
  let min = Number.MAX_SAFE_INTEGER;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      if (min > arr[i]) {
        min = arr[i];
      }
      sum += arr[i];
    }
  }
  answer.push(sum, min);
  return answer;
}

arr = [12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));

// for of
function solution(arr) {
  let answer = [];
  let min = Number.MAX_SAFE_INTEGER;
  let sum = 0;
  for (let x of arr) {
    if (x % 2 === 1) {
      if (min > x) {
        min = x;
      }
      sum += x;
    }
  }
  answer.push(sum);
  answer.push(min);
  return answer;
}
