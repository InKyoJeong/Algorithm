function solution(n, paths, gates, summits) {
  const graph = Array.from({ length: n + 1 }, () => Array());
  const d = Array(n + 1).fill(Infinity);

  paths.forEach((path) => {
    const [x, y, intensity] = path;
    graph[x].push([y, intensity]);
    graph[y].push([x, intensity]);
  });

  const queue = [];
  gates.forEach((gate) => {
    queue.push(gate);
    d[gate] = 0;
  });

  summits.forEach((summit) => {
    graph[summit] = [];
  });

  while (queue.length) {
    const currentGate = queue.shift();
    for (let i = 0; i < graph[currentGate].length; i++) {
      const [nextGate, nextIntensity] = graph[currentGate][i];
      const maxIntensity = Math.max(d[currentGate], nextIntensity);

      if (d[nextGate] > maxIntensity) {
        d[nextGate] = maxIntensity;
        queue.push(nextGate);
      }
    }
  }

  return summits
    .map((summit) => [summit, d[summit]])
    .sort((a, b) => {
      if (a[1] === b[1]) {
        return a[0] - b[0];
      }
      return a[1] - b[1];
    })
    .shift();
}
