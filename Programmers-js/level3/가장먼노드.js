function solution(n, edge) {
  var answer = 0;

  let graph = Array.from({ length: n + 1 }, () => Array());
  let check = new Array(n + 1).fill(0);
  let queue = [];

  for (let [a, b] of edge) {
    graph[a].push(b);
    graph[b].push(a);
  }

  // 굳이 정렬 안해도 된다.
  //     for(let i=0; i<n; i++){
  //         graph[i].sort((a,b)=>a-b);
  //     }

  queue.push(1);
  check[1] = 1;

  // console.log(graph);

  while (queue.length) {
    let x = queue.shift();
    for (let i = 0; i < graph[x].length; i++) {
      let now = graph[x][i];
      if (check[now] === 0) {
        queue.push(now);
        check[now] = check[x] + 1;
      }
    }
  }

  let maxNum = Number.MIN_SAFE_INTEGER;
  for (let x of check) {
    maxNum = Math.max(x, maxNum);
  }

  // //--- 다른 풀이 : 나머지 연산자로 max값 구하기 ---
  // let maxNum = Math.max(...check);
  // console.log(maxNum);

  answer = check.filter((e) => e === maxNum).length;

  return answer;
}
