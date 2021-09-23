function preOrder(tree, arr) {
  if (tree !== null) {
    arr.push(tree.value);
    preOrder(tree.left, arr);
    preOrder(tree.right, arr);
  }
}

function postOrder(tree, arr) {
  if (tree !== null) {
    postOrder(tree.left, arr);
    postOrder(tree.right, arr);
    arr.push(tree.value);
  }
}

function solution(nodeinfo) {
  nodeinfo = nodeinfo
    .map((v, i) => [i + 1, v[0], v[1]])
    .sort((a, b) => b[2] - a[2]);

  const tree = new BinaryTree();

  for (let i = 0; i < nodeinfo.length; i++) {
    let [value, xpos] = nodeinfo[i];
    tree.insert(value, xpos);
  }

  //   console.log(tree.root);

  let preArr = [];
  let postArr = [];

  preOrder(tree.root, preArr);
  postOrder(tree.root, postArr);

  return [preArr, postArr];
}

class Node {
  constructor(value, xpos) {
    this.left = null;
    this.right = null;
    this.value = value;
    this.xpos = xpos;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(value, xpos) {
    const newNode = new Node(value, xpos);
    if (this.root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (true) {
        if (xpos < currentNode.xpos) {
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        } else {
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }
}

// [x,y]
// y축 좌표는 레벨. 높으면 부모이므로 y좌표 크기 내림차순 정렬
// y축 크기 순서대로 넣는데, x좌표가 현재 부모보다 더큰게 오른쪽
