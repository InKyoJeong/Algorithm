function solution(x, y, n) {
  const d = Array(y + 1).fill(Infinity);

  d[x] = 0;

  for (let i = x + 1; i <= y; i++) {
    if (i - n >= x) {
      d[i] = Math.min(d[i], d[i - n] + 1);
    }
    if (i % 2 === 0 && x <= i / 2) {
      d[i] = Math.min(d[i], d[i / 2] + 1);
    }
    if (i % 3 === 0 && x <= i / 3) {
      d[i] = Math.min(d[i], d[i / 3] + 1);
    }
  }

  return d[y] === Infinity ? -1 : d[y];
}

// 시간초과
// function solution(x, y, n) {
//     let answer = Infinity;

//     function DFS(L, count) {
//         if(L > y){
//             return;
//         }
//         if(L === y) {
//             answer = Math.min(answer, count)
//             return;
//         }else {
//             DFS(L + n, count+1);
//             DFS(L * 2, count+1);
//             DFS(L * 3, count+1);
//         }
//     }
//     DFS(x, 0);

//     return answer === Infinity ? -1 : answer;
// }
