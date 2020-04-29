class PriorityQ {
  constructor() {
    this.values = [];
  }
  enqueue(val, priority) {
    let newNode = new Node(val, priority);
    this.values.push(newNode);
    this.bubbleUp();
    return this;
  }
  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      let parentidx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentidx];
      if (element.priority >= parent.priority) break;
      this.values[parentidx] = element;
      this.values[idx] = parent;
      idx = parentidx;
    }
  }
  dequeue() {
    let min = this.values[0];
    let last_element = this.values.pop();

    this.values[0] = last_element;
    this.sinkDown();
    return min;
  }
  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild.priority > element.priority) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (rightChild.priority < leftChild.priority && swap !== null) ||
          (rightChild.priority < element.priority && swap === null)
        ) {
          swap = rightChildIdx;
        }
      }
      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}
class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

var Binary = new PriorityQ();

console.log(Binary.enqueue(2, 5));
console.log(Binary.enqueue(12, 4));
console.log(Binary.enqueue(15, 3));
console.log(Binary.enqueue(8, 8));
console.log(Binary.enqueue(3, 2));
console.log(Binary.enqueue(6, 1));
console.log(Binary.enqueue(1, 32));
console.log(Binary.dequeue());
console.log(Binary.enqueue(4, 2));
let str = [3, 2, 12, 1, 23];
