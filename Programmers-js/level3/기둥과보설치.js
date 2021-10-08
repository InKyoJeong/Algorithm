// n: n*n격자
// x, y, a: 0기둥/1보, b: 0삭제/1설치
// 보는 한쪽끝이 기둥위 or 양쪽끝이 다른보와연결

// ---- 기둥이설치 가능한 경우
//   1-1) y좌표 0일땐 바닥이므로 기둥가능
//   1-2) x좌표같고 y좌표 1많으면 기둥위에 기둥가능
//             (100 기둥있으면 110 가능)
//.  1-3) 아래에 보가있음가능 210이면, 111 or 211

// ---- 보가 설치 가능한 경우
//   1) 바닥ㅇ은 보 설치가안됨 (y좌표 0일때)
//   2) 기둥왼,오른쪽에 보 설치가능
//       111설치하려면 100있거나,200 기둥있어야 (기둥이y하나 작거나, x하나 크고 y하나 작거나)
//  3) 보가 중간에 가능한경우
//     221 321 421 : 321같은경우 보가능 (y좌표같고 x좌표가 양쪽에있을때)

// 추가/삭제에따라 가능한경우 판별함수만들기

function checkVertical(x, y, answer) {
  if (y === 0) {
    return true;
  }
  if (
    answer.find(([a, b, struct]) => a === x && b === y - 1 && struct === 0) !==
    undefined
  ) {
    return true;
  }
  if (
    answer.find(([a, b, struct]) => a === x && b === y && struct === 1) !==
    undefined
  ) {
    return true;
  }
  if (
    answer.find(([a, b, struct]) => a === x - 1 && b === y && struct === 1) !==
    undefined
  ) {
    return true;
  }
  return false;
}
function installVertical(x, y, answer) {
  if (checkVertical(x, y, answer)) {
    answer.push([x, y, 0]);
  }
}
function checkHorizontal(x, y, answer) {
  let middle1 = answer.find(
    ([a, b, struct]) => a === x - 1 && b === y && struct === 1
  );
  let middle2 = answer.find(
    ([a, b, struct]) => a === x + 1 && b === y && struct === 1
  );

  if (y === 0) {
    return false;
  }
  if (
    answer.find(([a, b, struct]) => a === x && b === y - 1 && struct === 0) !==
    undefined
  ) {
    return true;
  }
  if (
    answer.find(
      ([a, b, struct]) => a === x + 1 && b === y - 1 && struct === 0
    ) !== undefined
  ) {
    return true;
  }
  if (middle1 !== undefined && middle2 !== undefined) {
    return true;
  }
  return false;
}
function installHorizontal(x, y, answer) {
  if (checkHorizontal(x, y, answer)) {
    answer.push([x, y, 1]);
  }
}
function deleteVertical(x, y, answer) {
  let answerCopy = answer.slice();
  let index = answerCopy.findIndex(
    ([a, b, struct]) => a === x && b === y && struct === 0
  );
  answerCopy.splice(index, 1);
  let check = true;
  answerCopy.forEach((v) => {
    if (v[2] === 0) {
      if (!checkVertical(v[0], v[1], answerCopy)) {
        check = false;
      }
    } else {
      if (!checkHorizontal(v[0], v[1], answerCopy)) {
        check = false;
      }
    }
  });
  if (check) {
    answer.splice(index, 1);
  }
}
function deleteHorizontal(x, y, answer) {
  let answerCopy = answer.slice();
  let index = answerCopy.findIndex(
    ([a, b, struct]) => a === x && b === y && struct === 1
  );
  answerCopy.splice(index, 1);
  let check = true;
  answerCopy.forEach((v) => {
    if (v[2] === 1) {
      if (!checkHorizontal(v[0], v[1], answerCopy)) {
        check = false;
      }
    } else {
      if (!checkVertical(v[0], v[1], answerCopy)) {
        check = false;
      }
    }
  });

  if (check) {
    answer.splice(index, 1);
  }
}
function solution(n, build_frame) {
  let answer = [];
  for (let build of build_frame) {
    let [x, y, struct, option] = build;
    // 설치할때
    if (struct === 0 && option === 1) {
      installVertical(x, y, answer);
    }
    if (struct === 1 && option === 1) {
      installHorizontal(x, y, answer);
    }
    // 삭제할때
    if (struct === 0 && option === 0) {
      deleteVertical(x, y, answer);
    }
    if (struct === 1 && option === 0) {
      deleteHorizontal(x, y, answer);
    }
  }

  return answer.sort((a, b) => {
    if (a[0] === b[0]) {
      if (a[1] === b[1]) {
        return a[2] - b[2];
      } else {
        return a[1] - b[1];
      }
    } else {
      return a[0] - b[0];
    }
  });
}
