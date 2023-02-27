function findPosition(maps, value) {
  const x = maps.findIndex((map) => map.includes(value));
  const y = maps[x].split("").findIndex((v) => v === value);

  return [x, y];
}

// todo: while문 하나로 합치기
function solution(maps) {
  const dx = [1, 0, -1, 0];
  const dy = [0, 1, 0, -1];
  const n = maps.length;
  const m = maps[0].length;
  const d = Array.from({ length: n }, () => Array(m).fill(0));
  let check = Array.from({ length: n }, () => Array(m).fill(0));

  const lever = [];
  const queue = [];
  const [startX, startY] = findPosition(maps, "S");
  queue.push([startX, startY]);
  check[startX][startY] = 1;

  while (queue.length) {
    const [x, y] = queue.shift();
    for (let k = 0; k < 4; k++) {
      const nx = x + dx[k];
      const ny = y + dy[k];
      if (0 <= nx && nx < n && 0 <= ny && ny < m && check[nx][ny] === 0) {
        if (
          maps[nx][ny] === "S" ||
          maps[nx][ny] === "O" ||
          maps[nx][ny] === "E"
        ) {
          d[nx][ny] = d[x][y] + 1;
          check[nx][ny] = 1;
          queue.push([nx, ny]);
        }
        if (maps[nx][ny] === "L") {
          d[nx][ny] = d[x][y] + 1;
          check[nx][ny] = 1;
          lever.push(nx, ny);
        }
      }
    }
  }

  if (!lever.length) {
    return -1;
  }

  queue.push(lever);
  check = Array.from({ length: n }, () => Array(m).fill(0));

  while (queue.length) {
    const [x, y] = queue.shift();
    for (let k = 0; k < 4; k++) {
      const nx = x + dx[k];
      const ny = y + dy[k];
      if (0 <= nx && nx < n && 0 <= ny && ny < m && check[nx][ny] === 0) {
        if (maps[nx][ny] === "S" || maps[nx][ny] === "O") {
          d[nx][ny] = d[x][y] + 1;
          check[nx][ny] = 1;
          queue.push([nx, ny]);
        }
        if (maps[nx][ny] === "E") {
          check[nx][ny] = 1;
          return d[x][y] + 1;
        }
      }
    }
  }

  return -1;
}
