function popMax(arr) {
  let max = Math.max(...arr);
  let maxIdx = arr.indexOf(max);
  return arr.splice(maxIdx, 1);
}

function popMin(arr) {
  let min = Math.min(...arr);
  let minIdx = arr.indexOf(min);
  return arr.splice(minIdx, 1);
}

function solution(operations) {
  var answer = [];

  operations.map((v) => {
    if (v[0] === "I") {
      answer.push(parseInt(v.slice(2), 10));
    }
    if (v === "D 1") {
      popMax(answer);
    }
    if (v === "D -1") {
      popMin(answer);
    }
  });

  if (answer.length === 0) {
    return [0, 0];
  } else {
    let max = Math.max(...answer);
    let min = Math.min(...answer);
    return [max, min];
  }
}
