function solution(n) {
  var answer = 0;

  n.toString()
    .split("")
    .forEach((e) => {
      return (answer += parseInt(e, 10));
    });

  return answer;
}
