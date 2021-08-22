// #이붙은 음은 하나로 처리해야하므로 소문자로 변경
function solution(m, musicinfos) {
  let infoArr = musicinfos.map((info) => info.split(","));

  m = m
    .replace(/(C#)/g, "c")
    .replace(/(D#)/g, "d")
    .replace(/(F#)/g, "f")
    .replace(/(G#)/g, "g")
    .replace(/(A#)/g, "a");

  let ansArr = [];

  for (let info of infoArr) {
    let start = info[0].split(":");
    let end = info[1].split(":");
    let time = (end[0] - start[0]) * 60 + (end[1] - start[1]);

    info[3] = info[3]
      .replace(/(A#)/g, "a")
      .replace(/(C#)/g, "c")
      .replace(/(D#)/g, "d")
      .replace(/(F#)/g, "f")
      .replace(/(G#)/g, "g");

    // 재생시간만큼 멜로디 짜르거나 반복
    if (info[3].length > time) {
      info[3] = info[3].slice(0, time);
    } else {
      info[3] = info[3].padEnd(time, info[3]);
    }

    // 멜로디 포함하면 재생시간이랑 곡제목 푸시
    if (info[3].includes(m)) {
      ansArr.push([info[2], time]);
    }
  }

  if (ansArr.length === 0) {
    return "(None)";
  }

  // 재생시간 길이순으로 정렬후 맨앞곡 리턴
  ansArr.sort((a, b) => b[1] - a[1]);
  return ansArr[0][0];
}
