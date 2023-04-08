class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}
class DoubleLinkedList {
  constructor(value) {
    this.head = {
      value,
      prev: null,
      next: null,
    };
    this.tail = this.head;
    this.selected = null;
    this.stack = [];
  }
  append(value, cursor) {
    const newNode = new Node(value);
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;

    if (cursor === value) {
      this.selected = newNode;
    }
    return this;
  }
  move(direction, count) {
    let currentNode = this.selected;
    for (let i = 0; i < count; i++) {
      currentNode = currentNode[direction];
    }
    this.selected = currentNode;
  }
  remove() {
    this.stack.push(this.selected);
    const prevNode = this.selected.prev;
    const nextNode = this.selected.next;

    if (prevNode) {
      prevNode.next = nextNode;
    }
    if (nextNode) {
      nextNode.prev = prevNode;
      this.selected = nextNode;
    } else {
      this.selected = prevNode;
    }
  }
  recover() {
    const recoverNode = this.stack.pop();
    const prevNode = recoverNode.prev;
    const nextNode = recoverNode.next;

    if (prevNode) {
      prevNode.next = recoverNode;
    }
    if (nextNode) {
      nextNode.prev = recoverNode;
    }
  }
}

function solution(n, k, cmd) {
  const result = Array.from({ length: n }, () => "O");

  const linkedList = new DoubleLinkedList(0);

  for (let i = 1; i < n; i++) {
    linkedList.append(i, k);
  }

  for (const command of cmd) {
    const [dir, count] = command.split(" ");
    if (dir === "D") {
      linkedList.move("next", count);
    }
    if (dir === "U") {
      linkedList.move("prev", count);
    }
    if (dir === "C") {
      linkedList.remove();
    }
    if (dir === "Z") {
      linkedList.recover();
    }
  }

  linkedList.stack.forEach((node) => (result[node.value] = "X"));

  return result.join("");
}

// 배열로 관리는  O(n) 시간초과
// 링크드리스트 이용하면 U,D : O(X) /  C,Z : O(1)

// U, D: 선택된 노드에서 X 번만 링크를 따라가면 되기 때문에 O(X)에 처리할 수 있습니다.
// C: 선택된 노드와 그 노드의 앞뒤로 연결된 노드들의 링크 정보만 변경해 주면 되기 때문에 O(1)에 처리할 수 있습니다.
// Z: 삭제된 노드 정보를 스택에 담아 두면 나중에 해당 노드에 O(1)에 접근하여 링크 정보를 복구해 줄 수 있기 때문에 O(1)에 처리할 수 있습니다.
