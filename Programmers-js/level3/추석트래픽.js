function solution(lines) {
  var answer = [];
  let lineArr = lines.map((v) => v.split(" "));
  let n = lineArr.length;
  let processBlock = [];
  let rangeLog = [];

  // 각각 시작 시간과 끝시간을 초로 만들기
  lineArr.map((line) => {
    let time = line[1].split(":");
    let process = Number(line[2].slice(0, -1)) * 1000;
    let temp = Number(time[0] * 3600) + Number(time[1] * 60) + Number(time[2]);
    let timeEnd = temp * 1000;
    let timeStart = timeEnd - process + 1;
    rangeLog.push(timeStart, timeEnd);
    processBlock.push([timeStart, timeEnd]);
  });

  rangeLog.sort((a, b) => a - b);

  // 블럭 시작이나 끝이 범위에 있거나 // 블럭이 범위에 포함되거나.
  // 범위는 각 시작~+1, 끝~끝+

  rangeLog.map((range) => {
    let rangeStart = range;
    let rangeEnd = range + 1000;
    let count = 0;
    processBlock.map((block) => {
      if (
        (block[0] >= rangeStart && block[0] < rangeEnd) ||
        (block[1] >= rangeStart && block[1] < rangeEnd) ||
        (block[0] <= rangeStart && block[1] >= rangeEnd)
      ) {
        count++;
      }
    });
    answer.push(count);
  });

  return Math.max(...answer);
}
