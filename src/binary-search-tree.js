const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  root() {
    if(this.root === null){
      return this.root
    }
  }

  add(data) {
    let newNode = new Node(data);

    if(this.root === null){
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }
  insertNode(node, newNode){
    if(newNode.data < node.data){
      if(node.left === null){
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if(node.right === null){
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  // has(/* data */) {
  //   throw new NotImplementedError('Not implemented');
  //   // remove line with error and write your code here
  // }

  find(node, data) {
    if(node === null){
      return null;
    } else if (data < node.data){
      return this.find(node.left, data);
    } else if (data > node.data){
      return this.find(node.right, data);
    } else {
      return node;
    }
  }

  remove(node, data) {
    if (node === null) {
      return null;
    } else if (data < node.data) {
      node.left = this.removeNode(node.left, data);
      return node;
    } else if (data > node.data) {
      node.right = this.removeNode(node.right, data);
      return node;
    } else {
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }
    }

    // min(node) {
    //   // if (node.left === null){
    //   //   return node;
    //   // } else {
    //   //   return this.findMinNode(node.left);
    //   // }
    // }
    //
    // max() {
    //   // throw new NotImplementedError('Not implemented');
    //   // remove line with error and write your code here
    // }
  }
}

module.exports = {
  BinarySearchTree
};