function solution(fees, records) {
  var answer = [];

  const inObj = {};
  const outQueue = [];
  const LAST_MIN = 23 * 60 + 59;

  // 입출 분류
  records.forEach((record) => {
    const [time, carNum, inOut] = record.split(" ");
    const [hh, mm] = time.split(":");
    const minute = Number(hh) * 60 + Number(mm);
    if (inOut === "IN") {
      inObj[carNum] ? inObj[carNum].push(minute) : (inObj[carNum] = [minute]);
    } else {
      outQueue.push([carNum, minute]);
    }
  });

  // 출차가 있는 경우
  const result = new Map();
  while (outQueue.length) {
    const [num, minute] = outQueue.shift();
    if (inObj[num].length) {
      const useMin = minute - inObj[num].shift();
      result.set(num, result.get(num) + useMin || useMin);
    }
  }

  // 출차가 없는 경우
  const numList = Object.keys(inObj);
  numList.forEach((num) => {
    if (inObj[num].length !== 0) {
      const remain = LAST_MIN - Number(inObj[num].shift());
      result.set(num, result.get(num) + remain || remain);
    }
  });

  // 번호 오름차순으로 가격 리턴
  const [bTime, bFee, bUnitTime, bUnitFee] = fees;
  numList.sort((a, b) => Number(a) - Number(b));
  numList.forEach((num) => {
    if (result.get(num) <= bTime) {
      answer.push(bFee);
    } else {
      const fee =
        bFee + Math.ceil((result.get(num) - bTime) / bUnitTime) * bUnitFee;
      answer.push(fee);
    }
  });
  return answer;
}
