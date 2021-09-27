function solution(sizes) {
  // 각 배열을 내림차순후 가로길이 최대와 세로길이 최대의 곱 구하기
  sizes.map((v) => v.sort((a, b) => b - a));
  let x = sizes.map((v) => v[0]);
  let y = sizes.map((v) => v[1]);
  return Math.max(...x) * Math.max(...y);
}
