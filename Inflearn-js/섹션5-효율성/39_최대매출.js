// 최대 매출

// 내풀이
function solution(k, arr) {
  let answer = 0;
  let max = Number.MIN_SAFE_INTEGER;
  for (let lt = 0; lt < arr.length; lt++) {
    let sum = 0;
    let count = 0;
    let rt = lt;
    while (count < k) {
      sum += arr[rt++];
      count++;
      if (max <= sum) {
        max = sum;
      }
    }
    answer = max;
  }

  return answer;
}

let a = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(3, a));

//
// 슬라이딩 윈도우 : 첫합 구하고 오른쪽으로 밀기
function solution(k, arr) {
  let answer = 0;
  let sum = 0;
  for (let i = 0; i < k; i++) {
    sum += arr[i];
    answer = sum;
  }
  for (let i = k; i < arr.length; i++) {
    sum = sum + arr[i] - arr[i - k];
    answer = Math.max(answer, sum);
  }

  return answer;
}

let a = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(3, a));
