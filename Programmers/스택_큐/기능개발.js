function solution(progresses, speeds) {
  let answer = [];

  let day = [];
  for (let i = 0; i < progresses.length; i++) {
    day.push(Math.ceil((100 - progresses[i]) / speeds[i]));
  }

  let count = 1;
  let max = day[0];
  for (let i = 1; i < day.length; i++) {
    let now = day[i];
    if (max >= now) {
      count += 1;
    } else {
      answer.push(count);
      max = now;
      count = 1;
    }
  }
  answer.push(count);

  return answer;
}
