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

//////
// 다시풀이

function solution(id_list, report, k) {
  let reports = [...new Set(report)].map((v) => v.split(" "));

  // 신고받은 개수
  const count = new Map();
  for (const x of reports) {
    if (count.has(x[1])) {
      count.set(x[1], count.get(x[1]) + 1);
    } else {
      count.set(x[1], 1);
    }
  }

  // 처리 결과 개수
  const obj = {};
  for (const x of reports) {
    if (count.get(x[1]) >= k) {
      obj[x[0]] ? obj[x[0]]++ : (obj[x[0]] = 1);
    }
  }

  return id_list.map((v) => {
    if (obj[v] > 0) {
      return obj[v];
    } else {
      return 0;
    }
  });
}

////
// 다시풀이
function solution(id_list, report, k) {
  let reports = [...new Set(report)].map((v) => v.split(" "));

  const count = new Map();
  for (const x of reports) {
    count.set(x[1], count.get(x[1]) + 1 || 1);
  }

  const obj = {};
  for (const x of reports) {
    if (count.get(x[1]) >= k) {
      obj[x[0]] ? obj[x[0]]++ : (obj[x[0]] = 1);
    }
  }

  return id_list.map((v) => {
    return obj[v] > 0 ? obj[v] : 0;
  });
}
