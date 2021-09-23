function solution(n, results) {
  var answer = 0;
  let graph = Array.from({ length: n }, () => Array(n).fill(0));

  for (let i = 0; i < results.length; i++) {
    let [a, b] = results[i];
    graph[a - 1][b - 1] = 1;
  }

  for (let k = 0; k < n; k++) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (graph[i][k] && graph[k][j]) {
          graph[i][j] = 1;
        }
      }
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (graph[i][j] === 1) {
        graph[j][i] = 1;
      }
    }
  }

  graph.map((v) => {
    return v.reduce((a, b) => a + b, 0) === n - 1 ? answer++ : null;
  });

  return answer;
}

// 플로이드 와샬 알고리즘
// ex) 1번이 3번을 이기고 3번이 2번을 이겼다면, 1번은 2번도 이긴다.
// 13 32 가 둘다 1일때 12가 1보다크면 1로만들기
// 1은 이제 3명중 2명과 결과가있으니까 순위매기기 가능

// 0 0 1        0 1 1                              0 1 1
// 0 0 0   =>   0 0 0   => 이제 진경우도 그냥 1로표시하면 1 0 1
// 0 1 0        0 1 0                              1 1 0

// 행마다 0이나 무한 경우가 아닌 숫자가 n-1이라면 순위매기기 가능
