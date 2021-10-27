function crossDot(line1, line2) {
  let [A, B, E] = line1;
  let [C, D, F] = line2;

  return [(B * F - E * D) / (A * D - B * C), (E * C - A * F) / (A * D - B * C)];
}

function solution(line) {
  var answer = [];

  // 교점을 모두 구하고 정수가아닌거 없애기
  let dot = [];
  let n = line.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      let [x, y] = crossDot(line[i], line[j]);
      if (Math.abs(x % 1) === 0 && Math.abs(y % 1) === 0) {
        dot.push([Number(x), Number(y)]);
      }
    }
  }

  if (dot.length === 1) {
    return ["*"];
  }

  dot.sort((a, b) => a[0] - b[0]);
  let [minX, maxX] = [dot[0][0], dot[dot.length - 1][0]];
  dot.sort((a, b) => b[1] - a[1]);
  let [maxY, minY] = [dot[0][1], dot[dot.length - 1][1]];
  // console.log(dot);
  // console.log(maxY,minY);
  // console.log(minX,maxX);

  for (let i = maxY; i >= minY; i--) {
    let str = "";
    let temp = [];

    for (let d of dot) {
      let [x, y] = [Number(d[0]), Number(d[1])];
      if (y === i) {
        temp.push(x);
      }
    }

    // 가로축x를 순회하면서 str을 채우기
    for (let k = minX; k <= maxX; k++) {
      if (temp.includes(k)) {
        str += "*";
      } else {
        str += ".";
      }
    }
    answer.push(str);
  }

  return answer;
}
