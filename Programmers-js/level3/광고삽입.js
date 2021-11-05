function solution(play_time, adv_time, logs) {
  const playTimeSec = changeToSec(play_time);
  const advTimeSec = changeToSec(adv_time);

  let time = Array.from({ length: playTimeSec }, () => 0);

  logs.forEach((log) => {
    let [start, end] = log.split("-");
    let s = changeToSec(start);
    let e = changeToSec(end);
    time[s]++;
    time[e]--;
  });

  for (let i = 1; i <= playTimeSec; i++) {
    time[i] += time[i - 1];
  }
  for (let i = 1; i <= playTimeSec; i++) {
    time[i] += time[i - 1];
  }

  let sum = time[advTimeSec - 1];
  let index = 0;
  for (let i = advTimeSec; i < playTimeSec; i++) {
    if (sum < time[i] - time[i - advTimeSec]) {
      sum = time[i] - time[i - advTimeSec];
      index = i - advTimeSec + 1;
    }
  }

  return changeToString(index);
}

function changeToSec(timeString) {
  let time = timeString.split(":").map((v) => Number(v));

  return time[0] * 60 * 60 + time[1] * 60 + time[2];
}

function changeToString(timeSec) {
  let hh = Math.floor(timeSec / 3600).toString();
  let mm = Math.floor((timeSec / 60) % 60).toString();
  let ss = Math.floor(timeSec % 60).toString();

  return `${hh.padStart(2, "0")}:${mm.padStart(2, "0")}:${ss.padStart(2, "0")}`;
}

// a   1 0 0 0 0 -1 0
// b   0 0 1 0 0 0 -1
// 누적 1 1 2 2 2 1  0
// 재생 1 2 4 6 8 9  9

// 누적 합은 구간별 시청자수를 통해 구할수있다.
// 누적 재생시간시간은 누적합을 또 누적하면되는데 그 사람만큼 재생시간이 더해지기 때문

// 1초부터 광고가 들어갈 수 있는 최종적인 시간까지 모두 계산
// 광고가 들어갈 수 있는 최종적인 시간은 "동영상 재생시간 - 광고시간 + 1"초
// ex) 동영상이 100초이고 광고가 40초라고 한다면, 광고가 들어갈 수 있는 가장 최종적인 시간은
// 100 - 40 + 1 = 61s가 된다. 61초부터 100초까지 재생되는 시간이 광고가 재생될 수 있는 가장 마지막 시간

// 따라서 광고 들어갈수있는 시간만큼 차이를 구해서 더 커질때 갱신
// https://yabmoons.tistory.com/623
// https://velog.io/@longroadhome/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-LV.3-%EA%B4%91%EA%B3%A0-%EC%82%BD%EC%9E%85-JS
