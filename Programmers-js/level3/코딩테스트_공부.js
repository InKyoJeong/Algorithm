function solution(alp, cop, problems) {
  const maxAlp = Math.max(...problems.map((problem) => problem[0]));
  const maxCop = Math.max(...problems.map((problem) => problem[1]));
  const d = Array.from({ length: 180 }, () => Array(180).fill(Infinity));

  alp = Math.min(alp, maxAlp);
  cop = Math.min(cop, maxCop);

  d[alp][cop] = 0;

  for (let i = alp; i <= maxAlp; i++) {
    for (let j = cop; j <= maxCop; j++) {
      d[i + 1][j] = Math.min(d[i + 1][j], d[i][j] + 1);
      d[i][j + 1] = Math.min(d[i][j + 1], d[i][j] + 1);
      for (const problem of problems) {
        if (problem[0] <= i && problem[1] <= j) {
          const nextAlp = Math.min(maxAlp, i + problem[2]);
          const nextCop = Math.min(maxCop, j + problem[3]);
          d[nextAlp][nextCop] = Math.min(
            d[nextAlp][nextCop],
            d[i][j] + problem[4]
          );
        }
      }
    }
  }

  return d[maxAlp][maxCop];
}
