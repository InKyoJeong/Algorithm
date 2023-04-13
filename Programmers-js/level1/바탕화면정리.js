function solution(wallpaper) {
  const answer = [];
  const n = wallpaper.length;
  const m = wallpaper[0].length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (wallpaper[i][j] === "#") {
        answer.push([i, j]);
      }
    }
  }

  const x = answer.map((v) => v[0]);
  const y = answer.map((v) => v[1]);

  const [x1, x2] = [Math.min(...x), Math.max(...x)];
  const [y1, y2] = [Math.min(...y), Math.max(...y)];

  return [x1, y1, x2 + 1, y2 + 1];
}
