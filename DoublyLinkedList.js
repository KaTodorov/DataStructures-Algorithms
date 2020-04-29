class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(item) {
    var newNode = new Node(item);
    if (this.head === null) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (this.tail === null) return undefined;
    var currTail = this.tail;

    if (this.length === 1) {
      this.tail = null;
      this.head = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
      currTail.prev = null;
    }
    this.length--;
    return currTail;
  }
  shift() {
    if (this.head === null) return undefined;
    var oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }
  unshift(val) {
    var newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(index) {
    var item;
    if (index < 0 || index > this.length) return null;
    if (index >= this.length / 2) {
      item = this.tail;
      console.log('from behind');
      let count = this.length - 1;
      while (count !== index) {
        item = item.prev;
        count--;
      }
    } else {
      item = this.head;
      console.log('from start');
      let count = 0;
      while (count !== index) {
        item = item.next;
        count++;
      }
    }
    return item;
  }
  set(index, val) {
    var item = this.get(index);
    if (item) {
      item.val = val;
      return true;
    }
    return false;
  }
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);
    var NewNode = new Node(val);
    var prevNode = this.get(index - 1);
    var nextNode = prevNode.next;
    NewNode.prev = prevNode;
    prevNode.next = NewNode;
    NewNode.next = nextNode;
    nextNode.prev = NewNode;
    this.length++;
    return this;
  }
  remove(index) {
    if (index < 0 || index > index > this.length) return false;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    var removedNode = this.get(index);
    var prevNode = removedNode.prev;
    var nextNode = removedNode.next;
    removedNode.prev = null;
    removedNode.next = null;
    prevNode.next = nextNode;
    nextNode.prev = prevNode;
    return removedNode;
  }
}

var first = new DoubleLinkedList();

first.push(12);
first.push(31);
first.push(155);
first.push(644);
first.push(1525);
first.push(3311);
console.log(first.insert(1, 32));
console.log(first.set(3, 321));
