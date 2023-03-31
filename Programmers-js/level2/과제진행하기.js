function convertMinTime(time) {
  const [hour, min] = time.split(":");

  return Number(hour) * 60 + Number(min);
}

function solution(plans) {
  const answer = [];
  const record = {};

  plans.forEach((plan) => {
    const [lang, startTime, playTime] = plan;
    plan[0] = convertMinTime(startTime);
    plan[1] = Number(playTime);
    plan[2] = lang;
    record[plan[0]] = [plan[1], plan[2]];
  });

  const n = plans.length;
  let finishPlan = 0;
  let startTime = Object.keys(record)[0];

  const stack = [];

  while (finishPlan < n) {
    if (record[startTime]) {
      stack.push(record[startTime]);
    }

    if (stack.length > 0) {
      stack[stack.length - 1][0]--;
      if (stack[stack.length - 1][0] === 0) {
        const [, lang] = stack.pop();
        answer.push(lang);
        finishPlan++;
      }
    }
    startTime++;
  }

  return answer;
}
