function solution(maps) {
  const answer = [];
  const n = maps.length;
  const m = maps[0].length;
  const check = Array.from({ length: n }, () => Array(m).fill(0));

  function bfs(x, y) {
    const dx = [-1, 0, 1, 0];
    const dy = [0, 1, 0, -1];
    const queue = [[x, y]];
    let count = Number(maps[x][y]);
    check[x][y] = 1;

    while (queue.length) {
      const [x, y] = queue.shift();
      for (let k = 0; k < 4; k++) {
        const nx = x + dx[k];
        const ny = y + dy[k];
        if (
          0 <= nx &&
          nx < n &&
          0 <= ny &&
          ny < m &&
          check[nx][ny] === 0 &&
          maps[nx][ny] !== "X"
        ) {
          check[nx][ny] = 1;
          queue.push([nx, ny]);
          count += Number(maps[nx][ny]);
        }
      }
    }
    return count;
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (maps[i][j] !== "X" && check[i][j] === 0) {
        const count = bfs(i, j);
        answer.push(count);
      }
    }
  }

  return answer.length ? answer.sort((a, b) => a - b) : [-1];
}
