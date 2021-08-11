function solution(scores) {
  var answer = "";
  let n = scores.length;
  for (let i = 0; i < n; i++) {
    let temp = [];
    let mine = 0;
    for (let j = 0; j < n; j++) {
      if (i === j) {
        mine = scores[j][i];
      }
      temp.push(scores[j][i]);
    }
    let max = Math.max(...temp);
    let maxCount = temp.filter((v) => v === max).length;
    if (mine === max && maxCount === 1) {
      temp = temp.filter((v) => v !== mine);
    }
    let min = Math.min(...temp);
    let minCount = temp.filter((v) => v === min).length;
    if (mine === min && minCount === 1) {
      temp = temp.filter((v) => v !== mine);
    }
    answer += grade(temp);
  }
  return answer;
}

function grade(arr) {
  let n = arr.length;
  let sum = arr.reduce((a, b) => a + b, 0);
  let average = sum / n;
  if (average < 50) {
    return "F";
  } else if (average < 70) {
    return "D";
  } else if (average < 80) {
    return "C";
  } else if (average < 90) {
    return "B";
  } else {
    return "A";
  }
}
