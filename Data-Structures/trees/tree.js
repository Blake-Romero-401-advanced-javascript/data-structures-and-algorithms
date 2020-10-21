'use strict';

class Node {
  constructor(value, left=null, right=null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root=null) {
    this.root = root;
  }

  preOrder() {
    const arr = [];

    function _preorder(root) {
      if(!root) {
        return;
      }

      arr.push(root.value);

      _preOrder(root.left);

      _preorder(root.right);
    }

    _preorder(this.root);

    return arr;
  }
}

class BinarySearchTree extends BinaryTree {
  constructor(root) {
    super(root);
  }

  
}