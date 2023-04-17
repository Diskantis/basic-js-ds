const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */

class ListNode {
  constructor(x) {
    this.value = x;
    this.next = null;
  }
}

class LinkedList{
  constructor(x) {
    this.head = x;
    this.tail = null;
  }

  append(value){
    const newNode = new ListNode(value);
    if(!this.head || !this.tail) {
      this.head = newNode;
      this.tail = newNode;

      return this;
    }
    this.tail.next = newNode;
    this.tail = newNode;
    return this;
  }

  toArray(){
    const nodes = [];
    let currentNode = this.head;
    while (currentNode) {
      nodes.push(currentNode);
      currentNode = currentNode.next;
    }
    return nodes;
  }

  toString(){
    return this.toArray().map(node => node.toString().toString());
  }

  delete(value){
    if(!this.head) {
      return null;
    }

    let deletedNode = null;

    while (this.head && this.head.value === value){
      deletedNode = this.head;
      this.head = this.head.next;
    }

    let currentNode = this.head;
    if(currentNode !== null){
      while (currentNode.next) {
        if(currentNode.next.value === value){
          deletedNode = currentNode.next;
          currentNode.next = currentNode.next.next;
        } else {
          currentNode = currentNode.next;
        }
      }
    }
    if(this.tail?.value === value){
      this.tail = currentNode;
    }
    return deletedNode;
  }

  find(value){
    if(!this.head) {
      return null;
    }
    let currentNode = this.head;
    while (currentNode) {
      if(currentNode.value === value){

        return currentNode
      }
      currentNode = currentNode.next;
    }
    return null;
  }
}

function removeKFromList(l, k) {
  let newList = new LinkedList(l);
  newList.delete(k)

  return newList.head
}

module.exports = {
  removeKFromList
};
