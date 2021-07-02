function solution(maps) {
  let dx = [1, 0, -1, 0];
  let dy = [0, 1, 0, -1];
  let n = maps.length;
  let m = maps[0].length;
  let d = Array.from({ length: n }, () => Array(n).fill(0));

  let queue = [];
  queue.push([0, 0]);
  d[0][0] = 1;
  maps[0][0] = 0;
  while (queue.length) {
    let [x, y] = queue.shift();
    for (let k = 0; k < 4; k++) {
      let nx = x + dx[k];
      let ny = y + dy[k];
      if (0 <= nx && nx < n && 0 <= ny && ny < m && maps[nx][ny] === 1) {
        queue.push([nx, ny]);
        maps[nx][ny] = 0;
        d[nx][ny] = d[x][y] + 1;
      }
    }
  }
  // console.log(d);
  if (!d[n - 1][m - 1]) return -1;
  return d[n - 1][m - 1];
}
