const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */

class newElementQueue {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  getUnderlyingList() {
    return this;
  }

  enqueue(value) {
    let newEl = new newElementQueue(value);
    if (this.tail) this.tail.next = newEl;
    this.tail = newEl;
    if (!this.head) this.head = newEl;  
  }

  dequeue() {
    let deleteHead = this.head.value;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      return deleteHead;
    }
    this.head = this.head.next;
    return deleteHead;
  }
}

module.exports = {
  Queue
};