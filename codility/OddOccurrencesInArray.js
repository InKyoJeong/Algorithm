// 100%
function solution(A) {
  let sH = new Map();
  for (let x of A) {
    if (sH.has(x)) {
      sH.set(x, sH.get(x) + 1);
    } else {
      sH.set(x, 1);
    }
  }

  for (let [key, value] of sH) {
    if (value % 2 !== 0) {
      return key;
    }
  }
}
