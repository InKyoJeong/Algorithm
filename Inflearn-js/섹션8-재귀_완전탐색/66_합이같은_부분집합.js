function solution(arr) {
  let answer = "NO";
  // let n = arr.length;
  // let total = arr.reduce((a, b) => a + b, 0);
  // let flag = 0;
  // function DFS(x, sum) {
  //   if (flag) {
  //     return;
  //   }

  //   if (x === n) {
  //     if (total - sum === sum) {
  //       answer = "YES";
  //       flag = 1;
  //     }
  //   } else {
  //     DFS(x + 1, sum);
  //     DFS(x + 1, sum + arr[x]);
  //   }
  // }
  // DFS(0, 0);

  return answer;
}

let arr = [1, 3, 5, 6, 7, 10];
console.log(solution(arr));
