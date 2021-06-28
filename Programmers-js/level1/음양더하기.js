function solution(absolutes, signs) {
  let n = absolutes.length;
  let sum = 0;
  for (let i = 0; i < n; i++) {
    if (signs[i] === true) {
      sum += absolutes[i];
    } else {
      sum -= absolutes[i];
    }
  }

  return sum;
}
