function solution(n, s, a, b, fares) {
  let graph = Array.from({ length: n }, () => Array(n).fill(Infinity));

  for (let i = 0; i < n; i++) {
    graph[i][i] = 0;
  }

  fares.forEach((fare) => {
    let x = fare[0];
    let y = fare[1];
    let cost = fare[2];
    graph[x - 1][y - 1] = cost;
    graph[y - 1][x - 1] = cost;
  });

  for (let k = 0; k < n; k++) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (graph[i][j] > graph[i][k] + graph[k][j]) {
          graph[i][j] = graph[i][k] + graph[k][j];
        }
      }
    }
  }

  // 4 2 + 4 6  > 4 x + x 2 + x 6
  // s a b
  let shortest = graph[s - 1][a - 1] + graph[s - 1][b - 1];
  for (let i = 1; i <= n; i++) {
    shortest = Math.min(
      shortest,
      graph[s - 1][i - 1] + graph[i - 1][a - 1] + graph[i - 1][b - 1]
    );
  }

  return shortest;
}
