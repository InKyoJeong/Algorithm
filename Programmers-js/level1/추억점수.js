function solution(name, yearning, photo) {
  const score = {};

  name.forEach((n, i) => {
    score[n] = yearning[i];
  });

  const result = photo.map((p) => {
    return p.reduce((acc, cur) => {
      if (score[cur]) {
        acc += score[cur];
      }
      return acc;
    }, 0);
  });

  return result;
}
