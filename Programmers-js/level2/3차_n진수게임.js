function solution(n, t, m, p) {
  var answer = "";
  let str = "";
  for (let i = 0; i < t * m; i++) {
    str += i.toString(n).toUpperCase();
  }

  for (let i = 0; i < t * m; i += m) {
    answer += str[p - 1 + i];
  }

  return answer;
}
