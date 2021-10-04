// 크루스칼 알고리즘
function getParent(parent, x) {
  if (parent[x] === x) {
    return x;
  }
  return getParent(parent, parent[x]);
}

function unionParent(parent, x, y) {
  const n1 = getParent(parent, x);
  const n2 = getParent(parent, y);
  if (n1 < n2) {
    return (parent[n2] = n1);
  } else {
    return (parent[n1] = n2);
  }
}

function findParent(parent, x, y) {
  const n1 = getParent(parent, x);
  const n2 = getParent(parent, y);
  if (n1 === n2) {
    return true;
  } else {
    return false;
  }
}

function solution(n, costs) {
  var answer = 0;
  let parent = [];

  for (let i = 0; i < n; i++) {
    parent.push(i);
  }

  costs.sort((a, b) => a[2] - b[2]);

  for (let x of costs) {
    if (!findParent(parent, x[0], x[1])) {
      unionParent(parent, x[0], x[1]);
      answer += x[2];
    }
  }

  return answer;
}

// 다른풀이
function solution(n, costs) {
  costs.sort((a, b) => a[2] - b[2]);
  let [from, to, answer] = costs.shift();
  const set = new Set([from, to]);

  while (set.size < n) {
    let index = costs.findIndex(
      ([from, to]) =>
        (set.has(from) && !set.has(to)) || (set.has(to) && !set.has(from))
    );
    let [[from, to, cost]] = costs.splice(index, 1);
    answer += cost;
    set.add(from);
    set.add(to);
  }
  return answer;
}
