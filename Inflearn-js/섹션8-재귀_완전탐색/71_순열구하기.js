function solution(m, arr) {
  let answer = [];
  //   n = arr.length;
  // let ch=Array.from({length:n}, ()=>0);
  // let tmp=Array.from({length:m}, ()=>0);;
  // function DFS(L){
  //     if(L===m){
  //         answer.push(tmp.slice());
  //     }
  //     else{
  //         for(let i=0; i<n; i++){
  //             if(ch[i]===0){
  //                 ch[i]=1;
  //                 tmp[L]=arr[i];
  //                 DFS(L+1);
  //                 ch[i]=0;
  //             }
  //         }
  //     }
  // }
  // DFS(0);
  //   return answer;
}

let arr = [3, 6, 9];
console.log(solution(2, arr));

// //
// function solution(m, arr) {
//   let answer = [];
//   let n = arr.length;
//   let temp = Array.from({ length: m }, () => 0);
//   let ch = Array.from({ length: n }, () => 0);
//   function DFS(L) {
//     if (L === m) {
//       answer.push(temp.slice());
//     } else {
//       for (let i = 0; i < n; i++) {
//         if (ch[i] === 0) {
//           ch[i] = 1;
//           temp[L] = arr[i];
//           DFS(L + 1);
//           ch[i] = 0; // 트리에서 back 하는 과정에서 체크한것 해제
//         }
//       }
//     }
//   }
//   DFS(0);
//   answer.push(answer.length);
//   return answer;
// }

// let arr = [3, 6, 9];
// console.log(solution(2, arr));
