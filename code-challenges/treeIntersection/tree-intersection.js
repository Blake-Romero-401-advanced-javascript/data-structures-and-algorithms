'use strict';

const Hash = require('../hashTable');

function treeIntersection(treeOne, treeTwo) {
  
  const table = new Hash();

  _treeHasher(treeOne);
  const repeats = _treeTraversal(treeTwo);

// =========================================
  function _treeTraversal(root) {
    
    let newArray = [];

    if(root === null) {
      return;
    }

    if(table.contains(root.value)) {
      newArray.push(root.value);
    }
    _treeTraversal(root.left);
    _treeTraversal(root.right);

    return newArray;
  }

// ===========================================
  function _treeHasher(root) {

    if(root === null) {
      return;
    }

    table.add(root.value);

    _treeHasher(root.left);
    _treeHasher(root.right);

  }

  return repeats;
}