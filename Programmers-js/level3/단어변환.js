function canGo(prev, next) {
  let cnt = 0;
  let n = prev.length;
  for (let i = 0; i < n; i++) {
    if (prev[i] === next[i]) {
      cnt++;
    }
  }
  if (cnt === n - 1) {
    return true;
  }
  return false;
}

function solution(begin, target, words) {
  var answer = 0;
  let n = words.length;
  let check = Array.from({ length: n + 1 }, () => 0);
  let queue = [];

  words.unshift(begin);
  queue.push(begin);

  while (queue.length) {
    let before = queue.pop();
    let beforeIdx = words.findIndex((e) => e === before);
    for (let i = 1; i <= n; i++) {
      if (check[i] === 0 && canGo(before, words[i])) {
        queue.push(words[i]);
        check[i] = check[beforeIdx] + 1;
        if (words[i] === target) {
          answer = check[i];
          break;
        }
      }
    }
  }
  // console.log(check)
  return answer;
}

// 단어 개수가 1개빼고 같으면 갈수있는곳
// 갈수있는 곳인지 판별
// 갈수있으면 큐에 넣고 방문했다고 표시하고 직전보다 +1로 단계저장
