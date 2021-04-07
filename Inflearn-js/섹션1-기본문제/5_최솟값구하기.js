function solution(arr) {
  let answer;
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }
  }
  answer = min;

  return answer;
}
let arr = [5, 3, 7, 11, 2, 15, 17];
console.log(solution(arr));

//
// Number.MAX_SAFE_INTEGER 이용
function solution(arr) {
  let answer;
  let min = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }
  }
  answer = min;
  return answer;
}
let arr = [5, 3, 7, 11, 2, 1, 17];
console.log(solution(arr));

//
// 내장함수로 최솟값, 최댓값 구하기
function solution(arr) {
  let answer = Math.min(...arr); // 최대는 Math.max
  return answer;
}
let arr = [5, 7, 9, 2, 1];
console.log(solution(arr)); //1

// 다른방법
let answer = Math.min.apply(null, arr);
