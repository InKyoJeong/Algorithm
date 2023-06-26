function getObjectWithCount(array) {
  const record = {};

  for (const x of array) {
    if (record[x]) {
      record[x] += 1;
    } else {
      record[x] = 1;
    }
  }

  return record;
}

function solution(X, Y) {
  let answer = "";

  const objX = getObjectWithCount(X);
  const objY = getObjectWithCount(Y);
  const array = Object.keys(objX).filter((key) =>
    Object.keys(objY).includes(key)
  );

  for (let i = array.length - 1; i >= 0; i--) {
    const count = Math.min(objX[array[i]], objY[array[i]]);
    answer += array[i].repeat(count);
  }

  if (answer.length === 0) {
    return "-1";
  }
  if (answer[0] === "0") {
    return "0";
  }

  return answer;
}
