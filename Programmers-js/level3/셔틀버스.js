function convertMin(time) {
  let hour = time.split(":")[0];
  let min = time.split(":")[1];
  let convert = Number(hour) * 60 + Number(min);
  return convert;
}

function solution(n, t, m, timetable) {
  var answer = "";
  const people = timetable.map((v) => convertMin(v)).sort((a, b) => a - b);
  let time = convertMin("09:00");

  for (let i = 0; i < n; i++) {
    let crew = people.filter((v) => v <= time).length;
    // 막차일때, 크루가 정원보다 많을때, 마지막사람보다 1분일찍
    if (i === n - 1) {
      if (crew >= m) {
        time = people[m - 1] - 1;
      }
      // 막차가 아닐때, 탄사람 삭제하고 시간 업데이트
    } else {
      people.splice(0, crew > m ? m : crew);
      time += t;
    }
  }

  let ansHour = Math.floor(time / 60);
  let ansMin = Math.floor(time % 60);
  answer =
    String(ansHour).padStart(2, "0") + ":" + String(ansMin).padStart(2, "0");
  return answer;
}
