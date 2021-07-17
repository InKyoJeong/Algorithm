function solution(arr1, arr2) {
  var answer = [[]];
  let l = arr1.length;
  let n = arr2[0].length;
  // 3*2  2*3  => 3*3
  // 행렬 곱셈은 l*m  m*n  => l*n 꼴로 나옴
  let sum = Array.from({ length: l }, () => Array(n).fill(0));

  let h = arr2.length;
  for (let i = 0; i < l; i++) {
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < h; k++) {
        sum[i][j] += arr1[i][k] * arr2[k][j];
      }
    }
  }
  return sum;
}
