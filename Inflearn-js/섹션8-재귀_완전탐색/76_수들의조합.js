function solution(n, k, arr, m) {
  let answer = 0;
  //   let temp = Array.from({ length: k }, () => 0); // 3칸 세팅
  //   let isAnswer = 0;
  //   function DFS(L, p) {
  //     if (L === k) {
  //       isAnswer = temp.slice().reduce((a, b) => a + b, 0);
  //       if (isAnswer % 6 === 0) {
  //         answer += 1;
  //       }
  //     } else {
  //       for (let i = p; i < arr.length; i++) {
  //         temp[L] = arr[i];
  //         DFS(L + 1, i + 1);
  //       }
  //     }
  //   }
  //   DFS(0, 0);

  return answer;
}

let arr = [2, 4, 5, 8, 12];
console.log(solution(5, 3, arr, 6));

//////////////////
// 세번째로 sum을 넣기
function solution(n, k, arr, m) {
  let answer = 0;

  //   function DFS(L, p, sum){
  //     if(L===k){
  //         if(sum%m === 0){
  //             answer+=1;
  //         }
  //     }else{
  //         for(let i=p; i<n; i++){
  //             DFS(L+1, i+1, sum+arr[i]);
  //         }
  //     }
  //   }
  //   DFS(0,0,0)
  return answer;
}

let arr = [2, 4, 5, 8, 12];
console.log(solution(5, 3, arr, 6));
