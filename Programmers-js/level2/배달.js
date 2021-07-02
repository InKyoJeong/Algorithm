function solution(N, road, K) {
  var answer = 0;
  let graph = Array.from({ length: N + 1 }, () => Array());
  let check = Array.from({ length: N + 1 }, () => 0);

  // 인접리스트 -> 점: [인접, 시간]
  for (let [a, b, c] of road) {
    graph[a].push([b, c]);
    graph[b].push([a, c]);
  }

  check[1] = 1;
  let temp = [];

  function DFS(L, sum) {
    if (sum < K) {
      temp.push(L);
      answer++;
    }
    if (sum === K) {
      temp.push(L);
      answer++;
      return;
    }
    if (sum > K) {
      return;
    } else {
      for (let i = 0; i < graph[L].length; i++) {
        let num = graph[L][i];
        let n = num[0];
        let t = num[1];
        if (check[n] === 0) {
          check[n] = 1;
          DFS(n, sum + t);
          check[n] = 0;
        }
      }
    }
  }
  DFS(1, 0);
  let set = new Set(temp);

  return [...set].length;
}
