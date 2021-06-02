function solution(m, arr) {
  let answer = Number.MAX_SAFE_INTEGER;
  //   let n = arr.length;

  //   function DFS(L, sum) {
  //     if (sum > m) {
  //       return;
  //     }
  //     if (L >= answer) {   // 최소답이 나왔을때 다른 가지를 더 깊게 뻗지않게
  //       return;
  //     }
  //     if (sum === m) {
  //       answer = Math.min(answer, L);
  //     } else {
  //       for (let i = 0; i < n; i++) {
  //         DFS(L + 1, sum + arr[i]);
  //       }
  //     }
  //   }
  //   DFS(0, 0);

  return answer;
}

let arr = [1, 2, 5];
console.log(solution(15, arr));
