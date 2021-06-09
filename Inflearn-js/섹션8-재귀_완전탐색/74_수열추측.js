function solution(n, f) {
  let answer;
  //   let flag = 0;
  //   let memo = Array.from(Array(11), () => Array(11).fill(0));
  //   let ch = Array.from({ length: n + 1 }, () => 0);
  //   let guess = Array.from({ length: n }, () => 0);
  //   let b = Array.from({ length: n }, () => 0);

  //   function combine(l, r) {
  //     if (memo[l][r] > 0) {
  //       return memo[l][r];
  //     }
  //     if (r === 0 || l === r) {
  //       return 1;
  //     } else {
  //       return (memo[l][r] = combine(l - 1, r - 1) + combine(l - 1, r));
  //     }
  //   }

  //   for (let i = 0; i < n; i++) {
  //     b[i] = combine(n - 1, i);
  //   }

  //   function DFS(L, sum) {
  //     if (flag) {
  //       return;
  //     }
  //     if (L === n && sum === f) {
  //       answer = guess.slice();
  //       flag = 1;
  //     } else {
  //       for (let i = 1; i <= n; i++) {
  //         if (ch[i] === 0) {
  //           ch[i] = 1;
  //           guess[L] = i;
  //           DFS(L + 1, sum + guess[L] * b[L]);
  //           ch[i] = 0;
  //         }
  //       }
  //     }
  //   }
  //   DFS(0, 0);

  return answer;
}

console.log(solution(4, 16));

// 3 1 2 4 일때
// 3C0 3C1 3C2 3C3 => 3*1 + 1*3 + 2*3 + 4*1 = 16
