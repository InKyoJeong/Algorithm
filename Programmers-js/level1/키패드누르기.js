function countDist(pushNum, left, right, hand) {
  const position = {
    1: [0, 0],
    2: [0, 1],
    3: [0, 2],
    4: [1, 0],
    5: [1, 1],
    6: [1, 2],
    7: [2, 0],
    8: [2, 1],
    9: [2, 2],
    "*": [3, 0],
    0: [3, 1],
    "#": [3, 2],
  };
  let pushP = position[pushNum];
  let leftP = position[left];
  let rightP = position[right];

  // 왼쪽에서 가운데 거리:
  let fromLeftDist =
    Math.abs(pushP[0] - leftP[0]) + Math.abs(pushP[1] - leftP[1]);
  // 오른쪽에서 가운데 거리:
  let fromRightDist =
    Math.abs(pushP[0] - rightP[0]) + Math.abs(pushP[1] - rightP[1]);

  if (fromLeftDist < fromRightDist) {
    return "L";
  } else if (fromLeftDist > fromRightDist) {
    return "R";
  }

  if (fromLeftDist === fromRightDist) {
    if (hand === "left") {
      return "L";
    } else {
      return "R";
    }
  }
}

function solution(numbers, hand) {
  let answer = "";

  let left_group = [1, 4, 7];
  let right_group = [3, 6, 9];
  // let middle_group = [0,2,5,8];

  let leftNum = "*";
  let rightNum = "#";

  for (let x of numbers) {
    if (left_group.includes(x)) {
      answer += "L";
      leftNum = x;
    } else if (right_group.includes(x)) {
      answer += "R";
      rightNum = x;
    } else {
      answer += countDist(x, leftNum, rightNum, hand);
      answer[answer.length - 1] === "L" ? (leftNum = x) : (rightNum = x);
    }
  }

  return answer;
}
