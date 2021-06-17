// BOJ
function solution(arr) {
  let answer = 0;
  //   let n = arr.length;
  //   let d = Array.from({ length: n + 1 }, () => 1);

  //   for (let i = 0; i < n; i++) {
  //     for (let j = 0; j < i; j++) {
  //       if (arr[i] > arr[j] && d[j] + 1 > d[i]) {
  //         d[i] = d[j] + 1;
  //       }
  //     }
  //   }

  //   for (let i = 0; i < n; i++) {
  //     answer = Math.max(answer, d[i]);
  //   }
  return answer;
}

let arr = [5, 3, 7, 8, 6, 2, 9, 4];
console.log(solution(arr));

//////////////
// Inf
function solution(arr) {
  let answer = 0;
  //   let d = Array.from({ length: arr.length }, () => 0);
  //   d[0] = 1;
  //   for (let i = 1; i < arr.length; i++) {
  //     let max = 0;
  //     for (let j = i - 1; j >= 0; j--) {
  //       if (arr[j] < arr[i] && d[j] > max) {
  //         max = d[j];
  //       }
  //     }
  //     d[i] = max + 1;
  //     answer = Math.max(answer, d[i]);
  //   }

  return answer;
}

let arr = [5, 3, 7, 8, 6, 2, 9, 4];
console.log(solution(arr));
