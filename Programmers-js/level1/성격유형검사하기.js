function solution(survey, choices) {
  const scores = [0, 3, 2, 1, 0, 1, 2, 3];
  const types = { RT: [0, 0], CF: [0, 0], JM: [0, 0], AN: [0, 0] };

  survey.forEach((type, i) => {
    const [left, right] = type.split("");

    let scoreIndex = choices[i];
    let score = scores[scoreIndex];
    let person = left + right;

    if (left > right) {
      person = right + left;
      scoreIndex = 8 - choices[i];
      score = scores[scoreIndex];
    }
    if (scoreIndex > 4) {
      types[person][1] += score;
    } else {
      types[person][0] += score;
    }
  });

  const highTypes = Object.keys(types).map((type) => {
    const [left, right] = type.split("");
    if (types[type][0] < types[type][1]) {
      return right;
    } else {
      return left;
    }
  });

  return highTypes.join("");
}

// 다른풀이
function solution(survey, choices) {
  const types = ["RT", "CF", "JM", "AN"];
  const results = {};

  types.forEach(([a, b]) => {
    results[a] = 0;
    results[b] = 0;
  });

  survey.forEach((type, index) => {
    const [left, right] = type.split("");
    const score = choices[index];
    results[score > 4 ? right : left] += Math.abs(4 - score);
  });

  const highTypes = types.map(([left, right]) =>
    results[right] > results[left] ? right : left
  );

  return highTypes.join("");
}
