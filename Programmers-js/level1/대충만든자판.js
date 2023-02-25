function solution(keymap, targets) {
  const answer = [];
  const obj = {};

  keymap.forEach((key) => {
    const buttons = key.split("");

    buttons.forEach((button, i) => {
      if (obj[button]) {
        if (obj[button] > i + 1) {
          obj[button] = i + 1;
        }
      } else {
        obj[button] = i + 1;
      }
    });
  });

  targets.forEach((target) => {
    let count = 0;
    const buttons = target.split("");

    buttons.forEach((button) => {
      if (!obj[button]) {
        count = Number.MIN_SAFE_INTEGER;
        return;
      }
      count += obj[button];
    });

    answer.push(count);
  });

  return answer.map((num) => (num <= 0 ? -1 : num));
}
