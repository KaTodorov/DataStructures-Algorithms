class MaxBnairyHead {
  constructor() {
    this.values = [];
  }
  enqueue(element) {
    this.values.push(element);
    this.bubbleUp();
    return this;
  }
  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      let parentidx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentidx];
      if (element <= parent) break;
      this.values[parentidx] = element;
      this.values[idx] = parent;
      idx = parentidx;
    }
  }
  extractMax() {
    let max = this.values[0];
    let last_element = this.values.pop();

    this.values[0] = last_element;
    this.sinkDown();
    return max;
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
        if (leftChild > element) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (rightChild > leftChild && swap !== null) ||
          (rightChild > element && swap === null)
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

var Binary = new MaxBnairyHead();
Binary.enqueue(44);
console.log(Binary.enqueue(2));
console.log(Binary.enqueue(19));
console.log(Binary.enqueue(15));
console.log(Binary.enqueue(8));
console.log(Binary.enqueue(3));
console.log(Binary.enqueue(6));
console.log(Binary.enqueue(1));
console.log(Binary.extractMax());
console.log(Binary.enqueue(4));
