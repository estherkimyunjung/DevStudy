class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    const newNode = new Node(val);
    if (this.root === null) {
      this.root = newNode;
      return this.root;
    }

    let curNode = this.root;
    while (true) {
      if (val < curNode.val) {
        if (curNode.left === null) {
          curNode.left = newNode;
          return this.root;
        }
        curNode = curNode.left;
      } else {
        if (curNode.right === null) {
          curNode.right = newNode;
          return this.root;
        }
        curNode = curNode.right;
      }
    }
  }

  find(val) {
    if (this.root === null) return null;

    let curNode = this.root;
    while (curNode !== null) {
      if (val < curNode.val) {
        curNode = curNode.left;
      } else if (val > curNode.val) {
        curNode = curNode.right;
      } else {
        return curNode;
      }
      return null;
    }
  }

  remove(val) {}
}
