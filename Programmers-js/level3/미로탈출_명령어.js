// 시간초과: 시간복잡도 O(4^k)
function solution(n, m, x, y, r, c, k) {
  const table = Array.from({ length: n }, () => Array(m).fill(0));
  const record = Array(k).fill("");

  table[x - 1][y - 1] = "S";
  table[r - 1][c - 1] = "E";

  const d = ["d", "l", "r", "u"];
  const dx = [1, 0, 0, -1];
  const dy = [0, -1, 1, 0];

  let str = "z".repeat(k);

  function DFS(startX, startY, L) {
    if (L === k && startX === r - 1 && startY === c - 1) {
      if (str > record.join("")) {
        str = record.join("");
        return;
      }
    } else if (L >= k) {
      return;
    } else {
      for (let i = 0; i < 4; i++) {
        const nx = dx[i] + startX;
        const ny = dy[i] + startY;
        if (0 <= nx && nx < n && 0 <= ny && ny < m) {
          record[L] = d[i];
          DFS(nx, ny, L + 1);
        }
      }
    }
  }

  DFS(x - 1, y - 1, 0);

  return str === "z".repeat(k) ? "impossible" : str;
}

// 풀이2) 통과
function solution(n, m, x, y, r, c, k) {
  const table = Array.from({ length: n }, () => Array(m).fill(0));
  const record = Array(k).fill("");

  table[x - 1][y - 1] = "S";
  table[r - 1][c - 1] = "E";

  const fastDist = k - (Math.abs(x - r) + Math.abs(y - c));
  if (fastDist % 2 !== 0) {
    return "impossible";
  }

  const d = ["d", "l", "r", "u"];
  const dx = [1, 0, 0, -1];
  const dy = [0, -1, 1, 0];

  let str = "z".repeat(k);

  function DFS(startX, startY, L, dist) {
    if (L > k) return;
    if (dist > k) return;

    if (L === k && startX === r - 1 && startY === c - 1) {
      if (str > record.join("")) {
        str = record.join("");
        return;
      }
    }
    if (str !== "z".repeat(k)) return;

    for (let i = 0; i < 4; i++) {
      const nx = dx[i] + startX;
      const ny = dy[i] + startY;
      if (0 <= nx && nx < n && 0 <= ny && ny < m) {
        record[L] = d[i];
        const nextDist =
          Math.abs(nx - (r - 1)) + Math.abs(ny - (c - 1)) + L + 1;
        DFS(nx, ny, L + 1, nextDist);
      }
    }
  }
  DFS(x - 1, y - 1, 0, k);

  return str === "z".repeat(k) ? "impossible" : str;
}
