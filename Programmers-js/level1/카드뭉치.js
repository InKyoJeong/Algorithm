function solution(cards1, cards2, goal) {
  while (cards1.length || cards2.length) {
    if (!goal.length) {
      return "Yes";
    }
    if (cards1?.[0] === goal[0]) {
      cards1.shift();
      goal.shift();
    } else if (cards2?.[0] === goal[0]) {
      cards2.shift();
      goal.shift();
    } else if (cards2?.[0] !== goal[0] && cards1?.[0] !== goal[0]) {
      return "No";
    }
  }

  return "Yes";
}

// for of
function solution(cards1, cards2, goal) {
  for (const word of goal) {
    if (cards1[0] === word) {
      cards1.shift();
    } else if (cards2[0] === word) {
      cards2.shift();
    } else {
      return "No";
    }
  }

  return "Yes";
}
