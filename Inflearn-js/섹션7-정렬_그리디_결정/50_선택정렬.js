function solution(arr) {
  let answer = arr;
  let n = arr.length;
  let index;
  for (let i = 0; i < n - 1; i++) {
    index = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[index] > arr[j]) {
        index = j;
      }
    }
    // temp = arr[i];
    // arr[i] = arr[index];
    // arr[index] = temp;
    [arr[i], arr[index]] = [arr[index], arr[i]];
  }

  return answer;
}

let arr = [13, 5, 11, 7, 23, 15];
console.log(solution(arr));
