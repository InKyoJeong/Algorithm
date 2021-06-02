function solution(c, arr) {
  let answer = Number.MIN_SAFE_INTEGER;
  let n = arr.length;

  function DFS(sum, x) {
    if (x === n) {
      if (sum <= c) {
        // if (sum > answer) {
        //   answer = sum;
        // }
        answer = Math.max(sum, answer);
      } else {
        return;
      }
    } else {
      DFS(sum + arr[x], x + 1);
      DFS(sum, x + 1);
    }
  }
  DFS(0, 0);

  return answer;
}

let arr = [81, 58, 42, 33, 61];
console.log(solution(259, arr));
