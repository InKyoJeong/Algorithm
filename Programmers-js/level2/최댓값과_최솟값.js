function solution(s) {
  var answer = "";
  let temp = s.split(" ");
  temp.sort((a, b) => a - b);
  answer = temp[0] + " " + temp[temp.length - 1];

  return answer;
}
