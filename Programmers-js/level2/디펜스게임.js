class PriorityQueue {
  constructor() {
    this.heap = [];
  }
  getLeftChildIndex(parentIndex) {
    return 2 * parentIndex + 1;
  }
  getRightChildIndex(parentIndex) {
    return 2 * parentIndex + 2;
  }
  getParentIndex(childIndex) {
    return Math.floor((childIndex - 1) / 2);
  }
  leftChild(index) {
    return this.heap[this.getLeftChildIndex(index)];
  }
  rightChild(index) {
    return this.heap[this.getRightChildIndex(index)];
  }
  parent(index) {
    return this.heap[this.getParentIndex(index)];
  }
  hasLeftChild(index) {
    return this.getLeftChildIndex(index) < this.heap.length;
  }
  hasRightChild(index) {
    return this.getRightChildIndex(index) < this.heap.length;
  }
  hasParent(index) {
    return this.getParentIndex(index) >= 0;
  }
  add(value) {
    this.heap.push(value);
    this.heapifyUp();
  }
  remove() {
    if (this.heap.length === 0) {
      return null;
    }
    const top = this.heap[0];
    this.heap[0] = this.heap[this.heap.length - 1];
    this.heap.pop();
    this.heapifyDown();
    return top;
  }
  swap(index1, index2) {
    let temp = this.heap[index1];
    this.heap[index1] = this.heap[index2];
    this.heap[index2] = temp;
  }
  heapifyUp() {
    let bottomIndex = this.heap.length - 1;
    while (
      this.hasParent(bottomIndex) &&
      this.parent(bottomIndex) > this.heap[bottomIndex]
    ) {
      this.swap(bottomIndex, this.getParentIndex(bottomIndex));
      bottomIndex = this.getParentIndex(bottomIndex);
    }
  }
  heapifyDown() {
    let topIndex = 0;
    while (this.hasLeftChild(topIndex)) {
      let smallChildIndex = this.getLeftChildIndex(topIndex);
      if (
        this.hasRightChild(topIndex) &&
        this.rightChild(topIndex) < this.leftChild(topIndex)
      ) {
        smallChildIndex = this.getRightChildIndex(topIndex);
      }
      if (this.heap[smallChildIndex] < this.heap[topIndex]) {
        this.swap(smallChildIndex, topIndex);
      } else {
        break;
      }
      topIndex = smallChildIndex;
    }
  }
}

function solution(n, k, enemy) {
  const pq = new PriorityQueue();

  for (let i = 0; i < k; i++) {
    pq.add(enemy[i]);
  }

  let count = 0;
  for (let i = k; i < enemy.length; i++) {
    pq.add(enemy[i]);
    const top = pq.remove();
    if (count + top > n) {
      return i;
    }
    count += top;
  }

  return enemy.length;
}
