function solution(target, arr) {
  let answer;
  // arr.sort((a, b) => a - b);
  // let start = 0;
  // let end = arr.length - 1;
  // while (start <= end) {
  //   let middle = parseInt((end - start) / 2);
  //   if (target === arr[middle]) {
  //     answer = middle + 1;
  //     break;
  //   } else if (target < arr[middle]) {
  //     end = middle - 1;
  //   } else {
  //     start = middle + 1;
  //   }
  // }
  return answer;
}

let arr = [23, 87, 65, 12, 57, 32, 99, 81];
console.log(solution(32, arr));
