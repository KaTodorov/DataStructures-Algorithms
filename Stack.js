class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}
// push and pop are done
// from the begining of the list
class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  push(val) {
    var newNode = new Node(val);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      var temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    this.length++;
    return this.length;
  }
  pop() {
    if (this.length === 0) return null;
    var temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    temp.next = null;
    this.length--;
    return temp.value;
  }
}
