// 전위순회 출력 : 1 2 4 5 3 6 7
// 중위순회 출력 : 4 2 5 1 6 3 7
// 후위순회 출력 : 4 5 2 6 7 3 1

function solution(n) {
  let answer = "";
  // function DFS(v) {
  //   if (v > 7) return;
  //   else {
  //     answer += v + " ";
  //     DFS(v * 2);
  //     DFS(v * 2 + 1);
  //   }
  // }
  // DFS(n);
  return answer;
}

console.log(solution(1));
