function solution(numbers, target) {
  var answer = 0;
  let n = numbers.length;

  // 합이되면 끝이아니라, 일단 v까진 다 탐색을 해야함.
  function DFS(L, sum) {
    if (L === n) {
      if (sum === target) {
        answer++;
      }
    } else {
      DFS(L + 1, sum + numbers[L]);
      DFS(L + 1, sum - numbers[L]);
    }
  }
  DFS(0, 0);

  return answer;
}
