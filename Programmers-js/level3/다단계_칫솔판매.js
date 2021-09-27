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

//
// 클래스
function solution(enroll, referral, seller, amount) {
  const tree = new Tree();

  for (let i = 0; i < enroll.length; i++) {
    tree.insert(enroll[i], referral[i]);
  }

  function DFS(sellname, cost) {
    if (cost === 0 || !tree.root[sellname]) {
      return;
    } else {
      let discount = Math.floor(cost / 10);
      tree.root[sellname].cost += cost - discount;
      DFS(tree.root[sellname].parent, discount);
    }
  }

  for (let i = 0; i < seller.length; i++) {
    DFS(seller[i], amount[i] * 100);
  }

  // console.log(tree.root)
  return enroll.map((v) => tree.root[v].cost);
}

class Node {
  constructor(parent) {
    this.parent = parent;
    this.cost = 0;
  }
}
class Tree {
  constructor() {
    this.root = {};
  }
  insert(name, parent) {
    let newNode = new Node(parent);
    this.root[name] = newNode;
  }
}
