function count(dist, arr) {
  let stand = arr[0];
  let cnt = 1;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - stand >= dist) {
      stand = arr[i];
      cnt++;
    }
  }
  return cnt;
}

function solution(c, stable) {
  let answer;
  stable.sort((a, b) => a - b);
  let start = 1;
  let end = stable[stable.length - 1];
  while (start <= end) {
    let mid = parseInt((start + end) / 2);
    if (count(mid, stable) >= c) {
      answer = mid;
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return answer;
}

let arr = [1, 2, 8, 4, 9];
console.log(solution(3, arr));
