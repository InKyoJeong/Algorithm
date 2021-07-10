function solution(land) {
  var answer = 0;
  let n = land.length;

  for (let i = 1; i < n; i++) {
    land[i][0] =
      land[i][0] + Math.max(land[i - 1][1], land[i - 1][2], land[i - 1][3]);
    land[i][1] =
      land[i][1] + Math.max(land[i - 1][0], land[i - 1][2], land[i - 1][3]);
    land[i][2] =
      land[i][2] + Math.max(land[i - 1][0], land[i - 1][1], land[i - 1][3]);
    land[i][3] =
      land[i][3] + Math.max(land[i - 1][0], land[i - 1][1], land[i - 1][2]);
  }

  for (let i = 0; i < 4; i++) {
    answer = Math.max(land[n - 1][i], answer);
  }

  return answer;
}

///////
// DFS: 테케는 맞으나 시간초과

// function solution(land) {
//     var answer = 0;
//     let n = land.length;
//     let m = land[0].length;

//     let temp = [];

//     function DFS(L, sum, before){
//         if(L === n){
//             temp.push(sum);
//         }else{
//             for(let i=0; i<m; i++){
//                if(before !== i){
//                    DFS(L+1, sum + land[L][i], i);
//                }
//             }
//         }
//     }
//     DFS(0, 0, -1);
//     // 단계, 총합, 이전 밟은열
//     answer = Math.max(...temp)

//     return answer;
// }
