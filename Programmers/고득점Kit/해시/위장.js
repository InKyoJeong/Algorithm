function solution(clothes) {
  let answer = 1;
  let obj = {};
  clothes.forEach((e) => {
    if (obj[e[1]] > 0) {
      obj[e[1]] += 1;
    } else {
      obj[e[1]] = 1;
    }
  });
  for (let val in obj) {
    answer *= obj[val] + 1;
  }

  return answer - 1;
}

// Map
function solution(clothes) {
  let answer = 1;
  let sH = new Map();
  for (let x of clothes) {
    let cloth = x[1];
    if (sH.has(cloth)) {
      sH.set(cloth, sH.get(cloth) + 1);
    } else {
      sH.set(cloth, 1);
    }
  }

  for (let [key, value] of sH) {
    answer *= value + 1;
  }

  return answer - 1;
}
