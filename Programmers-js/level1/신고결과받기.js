function solution(id_list, report, k) {
  const obj = {};
  id_list.forEach((id) => (obj[id] = []));

  // id별 신고한 id목록
  report.forEach((v) => {
    const [id, abuse] = v.split(" ");
    if (!obj[id].includes(abuse)) {
      obj[id].push(abuse);
    }
  });

  // 정지된 유저
  const arr = Object.values(obj).flat();
  const sH = new Map();
  for (let x of arr) {
    if (sH.has(x)) {
      sH.set(x, sH.get(x) + 1);
    } else {
      sH.set(x, 1);
    }
  }

  const abused = [];
  for (let [key, value] of sH) {
    if (value >= k) {
      abused.push(key);
    }
  }

  // 처리결과 개수 리턴
  id_list.forEach((id) => {
    obj[id] = obj[id].filter((v) => abused.includes(v)).length;
  });

  return Object.values(obj);
}
