function solution(food) {
  let left = "";

  for (let i = 1; i < food.length; i++) {
    const half = Math.floor(food[i] / 2);
    left += String(i).repeat(half);
  }

  return left + "0" + left.split("").reverse().join("");
}
