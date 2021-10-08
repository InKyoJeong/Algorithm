function solution(n, stations, w) {
  let answer = 0;
  let start = 0;
  let range = 2 * w + 1;

  for (let station of stations) {
    let end = station - w - 1;
    answer += Math.ceil((end - start) / range);
    start = station + w;
  }

  answer += Math.ceil((n - start) / range);

  return answer;
}
