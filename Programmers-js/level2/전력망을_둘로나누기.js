function solution(n, wires) {
  var answer = 100;
  let graph = Array.from({ length: n + 1 }, () => Array());

  for (let wire of wires) {
    let [a, b] = wire;
    graph[a].push(b);
    graph[b].push(a);
  }
  // console.log(graph)

  // 버릴점을 하나 넘겨서 그점일땐 건너뛰기
  // except
  function bfs(start, except) {
    let check = Array.from({ length: n + 1 }, () => 0);
    let queue = [];
    let ans = 1;
    queue.push(start);

    while (queue.length) {
      let x = queue.shift();
      check[x] = 1;
      for (let i = 0; i < graph[x].length; i++) {
        if (except !== graph[x][i] && check[graph[x][i]] === 0) {
          check[graph[x][i]] = 1;
          queue.push(graph[x][i]);
          ans++;
        }
      }
    }
    return ans;
  }

  wires.map((wire) => {
    const [a, b] = wire;
    const diff = Math.abs(bfs(a, b) - bfs(b, a));
    answer = Math.min(answer, diff);
  });

  return answer;
}

// bfs(a,b) - bfs(b,a) : wire 인자 a,b를 제외할 노드와 시작할 노드로 정하기
