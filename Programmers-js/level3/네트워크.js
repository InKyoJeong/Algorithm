function solution(n, computers) {
  var answer = 0;
  let check = Array.from({ length: n }, () => 0);

  function DFS(L) {
    check[L] = 1;
    for (let i = 0; i < n; i++) {
      if (computers[L][i] === 1 && check[i] === 0) {
        DFS(i);
      }
    }
  }

  for (let i = 0; i < n; i++) {
    if (check[i] === 0) {
      DFS(i);
      answer++;
    }
  }

  return answer;
}

// 하나씩 넣고 방문했다고 체크
// 방문할수 있는 점이 있으면 체크
// DFS를 돌린만큼 답+1

//////
// BFS

function solution(n, computers) {
  var answer = 0;
  let check = Array.from({ length: n }, () => 0);
  let queue = [];

  function bfs(network) {
    check[network] = 1;
    queue.push(network);
    while (queue.length) {
      let x = queue.shift();
      for (let i = 0; i < n; i++) {
        if (computers[x][i] === 1 && check[i] === 0) {
          queue.push(i);
          check[i] = 1;
        }
      }
    }
  }

  for (let i = 0; i < n; i++) {
    if (!check[i]) {
      bfs(i);
      answer++;
    }
  }

  return answer;
}

////
// 함수 하나로

function solution(n, computers) {
  var answer = 0;
  let check = Array.from({ length: n }, () => 0);
  let queue = [];

  for (let i = 0; i < n; i++) {
    if (!check[i]) {
      answer++;
      queue.push(i);
      check[i] = 1;
      while (queue.length) {
        let x = queue.shift();
        for (let i = 0; i < n; i++) {
          if (computers[x][i] === 1 && check[i] === 0) {
            queue.push(i);
            check[i] = 1;
          }
        }
      }
    }
  }

  return answer;
}
