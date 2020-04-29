class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return undefined;
    var current = this.head;
    var newTail = this.current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  shift() {
    if (!this.head) return undefined;
    var currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return currentHead;
  }
  unshift(val) {
    var newVal = new Node(val);
    if (this.length === 0) {
      this.tail = newVal;
      this.head = newVal;
    } else {
      newVal.next = this.head;
      this.head = newVal;
    }
    this.length++;
    return this;
  }
  get(index) {
    if (index >= this.length && index < 0) return null;
    var searched_item = this.head;
    for (var i = 0; i < index; i++) {
      searched_item = searched_item.next;
    }
    return searched_item;
  }
  set(index, val) {
    var foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }
  insert(index, val) {
    if (index >= this.length && index < 0) return false;
    if (index === this.length) return !!this.push(val);
    if (index === 0) return !!this.unshift(val);
    var NewNode = new Node(val);
    var foundNode = this.get(index - 1);

    NewNode.next = foundNode.next;
    foundNode.next = NewNode;
    this.length++;
    return true;
  }
  remove(index) {
    if (index >= this.length && index < 0) return undefined;
    if (index === this.length - 1) return this.pop();
    if (index === 0) return this.shift();

    var foundNode = this.get(index - 1);
    removedNode = foundNode.next;
    foundNode.next = removedNode.next;
    this.length--;
    return removedNode;
  }
  reverse() {
    var node = this.head;
    this.head = this.tail;
    this.tail = node;
    var next;
    var prev = null;
    for (var i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
}
// insertion o(1)
// removel depends O(1) to O(n)
//Searching O(N)
// Access O(N)

var list = new SinglyLinkedList();
list.push(12);
list.push(21);
list.push(32);
list.push(44);
list.insert(2, 99);
console.log(list.get(1));
console.log(list.get(2));
console.log(list.get(3));
console.log(list.reverse());
