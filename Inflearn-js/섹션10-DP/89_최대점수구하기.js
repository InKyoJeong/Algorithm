// 답은 출력되나 맞게푼건지 모르겠음
// function solution(m, arr) {
//   let answer = 0;
//   let n = arr.length;
//   let d = Array.from({ length: m + 1 }, () => 0);

//   // d[i] : 보석 무게 i 안에 얻을수 있는 최대 가치
//   // d[20] = d[20-5]+10, d[20-12] + 25, d[20-8] + 15, d[20-3]+6, d[20-4]+7 중에서 최대값
//   // d[0] = 0;

//   for (let i = 1; i <= m; i++) {
//     for (let j = 0; j < n; j++) {
//       if (i >= arr[j][1]) {
//         d[i] = Math.max(d[i], d[i - arr[j][1]] + arr[j][0]);
//       }
//     }
//   }
//   answer = d[m];
//   return answer;
// }
// // i=1 일때 j=0이면 1>5까지 계속 거짓.
// // i=5 일때 j=0이면 d[5] = d[0]+10 j=1이면x j=2면x j=3면 d[5]=d[2]+6 j=4면 d[5]=d[1]+7

// // i=6일때 j=0이면 d[6] = d[1]+10 j=1이면x j=2면x j=3면 d[6]=d[3]+6
// // i=8일때 j=0: d[3]+10, d[0]+15, d[5]+10 (16) , d[4]+7
// // i=

// let arr = [
//     [10, 5],
//     [25, 12],
//     [15, 8],
//     [6, 3],
//     [7, 4],
// ];
// console.log(solution(20, arr));

//
//////////
// 얘는 동전처럼 하나부터 다넣어보면 안됨. 문제라서, 푼거또풀면 중복으로 적용됨. 따라서 뒤에서부터 한다.
function solution(m, arr) {
  let answer = 0;
  //   let n = arr.length;
  //   let d = Array.from({ length: m + 1 }, () => 0);

  //   for (let i = 0; i < n; i++) {
  //     for (let j = m; j >= arr[i][1]; j--) {
  //       d[j] = Math.max(d[j], d[j - arr[i][1]] + arr[i][0]);
  //     }
  //   }
  //   answer = d[m];
  return answer;
}

let arr = [
  [10, 5],
  [25, 12],
  [15, 8],
  [6, 3],
  [7, 4],
];
console.log(solution(20, arr));
