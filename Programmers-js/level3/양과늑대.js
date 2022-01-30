function solution(info, edges) {
  const n = info.length;
  const graph = Array.from({ length: n }, () => Array());

  edges.forEach((edge) => {
    const [parent, child] = edge;
    graph[parent].push(child);
  });

  let maxSheep = 0;

  function DFS(sheep, wolf, route) {
    maxSheep = Math.max(sheep, maxSheep);

    for (let parent of route) {
      for (let child of graph[parent]) {
        if (route.includes(child)) {
          continue;
        }
        if (sheep === wolf) {
          continue;
        }

        if (info[child] === 0) {
          DFS(sheep + 1, wolf, [...route, child]);
        } else {
          DFS(sheep, wolf + 1, [...route, child]);
        }
      }
    }
  }

  DFS(1, 0, [0]);

  return maxSheep;
}
