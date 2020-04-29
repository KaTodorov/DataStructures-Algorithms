class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}
// push and pop are done
// from the begining of the list
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(val) {
    var newNode = new Node(val);
    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }
  dequeue() {
    if (!this.first) return null;
    var temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    temp.next = null;
    this.this--;
    return temp.value;
  }
}
newlist = new Queue();
newlist.enqueue(23);
console.log(newlist.enqueue(22));
console.log(newlist.dequeue());
console.log(newlist.dequeue());
