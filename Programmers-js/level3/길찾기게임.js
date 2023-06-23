class Node {
  constructor(index, xpos) {
    this.left = null;
    this.right = null;
    this.index = index;
    this.xpos = xpos;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(index, xpos) {
    const newNode = new Node(index, xpos);
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

function preOrder(node, arr) {
  if (node !== null) {
    arr.push(node.index);
    preOrder(node.left, arr);
    preOrder(node.right, arr);
  }
  return arr;
}

function postOrder(node, arr) {
  if (node !== null) {
    postOrder(node.left, arr);
    postOrder(node.right, arr);
    arr.push(node.index);
  }
  return arr;
}

function solution(nodeinfo) {
  const tree = new BinaryTree();

  const sortedNodes = nodeinfo
    .map((node, i) => [...node, i + 1])
    .sort((a, b) => b[1] - a[1]);

  sortedNodes.forEach((node) => {
    const [xpos, _, index] = node;
    tree.insert(index, xpos);
  });

  const x = preOrder(tree.root, []);
  const y = postOrder(tree.root, []);

  return [x, y];
}

// [x,y]
// y축 좌표는 레벨. 높으면 부모이므로 y좌표 크기 내림차순 정렬
// y축 크기 순서대로 넣는데, x좌표가 현재 부모보다 더큰게 오른쪽

// 순회트리
class Node {
  constructor(index, xpos) {
    this.left = null;
    this.right = null;
    this.index = index;
    this.xpos = xpos;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
    this.preArr = [];
    this.postArr = [];
  }

  insert(index, xpos) {
    const newNode = new Node(index, xpos);
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
  preorder(node) {
    if (node !== null) {
      this.preArr.push(node.index);
      this.preorder(node.left);
      this.preorder(node.right);
    }
  }
  postorder(node) {
    if (node !== null) {
      this.postorder(node.left);
      this.postorder(node.right);
      this.postArr.push(node.index);
    }
  }
}

function solution(nodeinfo) {
  const tree = new BinaryTree();

  const sortedNodes = nodeinfo
    .map((node, i) => [...node, i + 1])
    .sort((a, b) => b[1] - a[1]);

  sortedNodes.forEach((node) => {
    const [xpos, ypos, index] = node;
    tree.insert(index, xpos);
  });

  tree.preorder(tree.root);
  tree.postorder(tree.root);

  return [tree.preArr, tree.postArr];
}
