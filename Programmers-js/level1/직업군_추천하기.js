function solution(table, languages, preference) {
  table = table.map((v) => v.split(" "));

  let result = [];
  table.forEach((job) => {
    let score = 0;
    for (let i = 0; i < languages.length; i++) {
      let index = job.findIndex((v) => v === languages[i]);
      if (index > 0) {
        score += (6 - index) * preference[i];
      } else {
        score += 0 * preference[i];
      }
    }
    result.push([job[0], score]);
  });

  result.sort((a, b) => {
    if (a[1] === b[1]) {
      if (a[0] > b[0]) {
        return 1;
      } else {
        return -1;
      }
    } else {
      return b[1] - a[1];
    }
  });
  //   console.log(result);

  return result[0][0];
}
