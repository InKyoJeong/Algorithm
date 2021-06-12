function solution(participant, completion) {
  let answer = "";
  let sH = new Map();

  for (let x of completion) {
    if (sH.has(x)) {
      sH.set(x, sH.get(x) + 1);
    } else {
      sH.set(x, 1);
    }
  }

  for (let x of participant) {
    if (sH.has(x)) {
      sH.set(x, sH.get(x) - 1);
      if (sH.get(x) === 0) {
        sH.delete(x);
      }
    } else {
      answer += x;
    }
  }

  return answer;
}
