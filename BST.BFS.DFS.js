class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(val) {
    var newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      var current = this.root;
      while (true) {
        if (val === current.value) return undefined;
        if (current.value > newNode.value) {
          if (current.left) {
            current = current.left;
          } else {
            current.left = newNode;
            return this;
          }
        } else {
          if (current.right) {
            current = current.right;
          } else {
            current.right = newNode;
            return this;
          }
        }
      }
    }
  }
  find(val) {
    if (!this.root) return false;
    var current = this.root;
    while (true) {
      if (current.value === val) return current;
      else if (current.left === null && current.right === null) return false;
      else if (current.value > val) {
        if (current.left) {
          current = current.left;
        }
      } else if (current.value < val) {
        if (current.right) {
          current = current.right;
        }
      }
    }
  }
  BFS() {
    var data = [];
    var queue = [];
    var node = this.root;
    queue.push(this.root);
    while (queue.length) {
      node = queue.shift();
      data.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
      
    }
    return data;
  }
  DFSpreOrder() {
    var data = [];
    var current = this.root;
    function traverse(node) {
      data.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(current);
    return data;
  }
  DFSpostOrder() {
    var data = [];
    var current = this.root;
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.value);
    }
    traverse(current);
    return data;
  }
  DFSinOrder() {
    var data = [];
    var current = this.root;

    function traverse(node) {
      if (node.left) traverse(node.left);
      data.push(node.value);
      if (node.right) traverse(node.right);
    }
    traverse(current);
    return data;
  }
}

var tree = new BinarySearchTree();
tree.insert(150);
console.log(tree.insert(40));
console.log(tree.insert(120));
console.log(tree.insert(64));
console.log(tree.insert(20));
console.log(tree.insert(541));
console.log(tree.insert(65));
// console.log(tree.BFS());
console.log(tree.DFSpreOrder());
console.log(tree.DFSpostOrder());
console.log(tree.DFSinOrder());
      //150
  //40       //541
//20  //120
    //64
      //65
