function solution(enroll, referral, seller, amount) {
  var answer = [];
  let tree = {};
  tree["-"] = { parent: null, cost: 0 };

  for (let i = 0; i < enroll.length; i++) {
    tree[enroll[i]] = { parent: referral[i], cost: 0 };
  }

  function DFS(name, cost) {
    if (tree[name].parent === null) {
      return;
    }
    if (cost === 0) {
      return;
    }
    let discountCost = Math.floor(cost / 10);
    tree[name].cost += cost - discountCost;
    DFS(tree[name].parent, discountCost);
  }

  for (let i = 0; i < seller.length; i++) {
    DFS(seller[i], amount[i] * 100);
  }

  enroll.map((v) => {
    return answer.push(tree[v].cost);
  });

  return answer;

  // 그냥 바로 리턴하면됨 return enroll.map(v => tree[v].cost)
}
// 돈이없거나 추천인없을때까지 반복
