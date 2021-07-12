function combination(arr, count) {
  let n = arr.length;
  let answer = [];
  let temp = Array.from({ length: count }, () => 0);

  function DFS(L, p) {
    if (L === count) {
      answer.push(temp.slice());
    } else {
      for (let i = p; i < n; i++) {
        temp[L] = arr[i];
        DFS(L + 1, i + 1);
      }
    }
  }
  DFS(0, 0);

  return answer;
}

function toStr(combArr, relationArr) {
  let str = "";
  for (let x of combArr) {
    str += relationArr[x];
  }
  return str;
}

function isOverlay(arr, idx) {
  let sH = new Map();
  for (let x of arr) {
    if (sH.has(x)) {
      sH.set(x, sH.get(x) + 1);
    } else {
      sH.set(x, 1);
    }
  }

  for (let [key, value] of sH) {
    if (value > 1) {
      return true;
    }
  }
  return false;
}

function solution(relation) {
  var answer = 0;

  // 먼저 인덱스로 조합을 구하기
  let n = relation.length;
  let m = relation[0].length;
  let idx = Array.from({ length: m }, (v, i) => i);

  let comb = [];
  for (let i = 1; i <= m; i++) {
    comb.push(...combination(idx, i));
  }

  // 조합에따라 문자열로 붙여서 중복된거 검사
  let candidate = [];
  for (let i = 0; i < comb.length; i++) {
    let strArr = [];
    for (let j = 0; j < relation.length; j++) {
      strArr.push(toStr(comb[i], relation[j]));
    }

    if (!isOverlay(strArr)) {
      candidate.push(comb[i]);
    }
  }

  //   console.log(candidate);

  // 다시 최소성 검사
  function isPart(x, y) {
    return y.every((v) => x.includes(v));
  }

  const candidateKeys = candidate.filter((v, idx) => {
    for (let i = 0; i < candidate.length; i++) {
      if (i === idx) continue;
      if (isPart(v, candidate[i])) {
        return false;
      }
    }
    return true;
  });

  console.log(candidateKeys);

  return candidateKeys.length;
}

// filter는 콜백함수가 true를 반환하면 요소를 유지하고, false를 반환하면 버린다!
