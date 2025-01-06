const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class newElementStack {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}
class Stack {
  constructor(head, tail) {
    this.head = head;
    this.tail = tail;    
  }

  push(element) {
    let newEl = new newElementStack(element);
    if (this.tail) this.tail.next = newEl;
    this.tail = newEl;
    if (!this.head) this.head = newEl;
  }

  pop() {
    const deletedTail = this.tail.value;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      return deletedTail;
    }
    let current = this.head;
    while (current.next) {
      if (!current.next.next) {
        current.next = null;
      } else {
        current = current.next;
      }
    }
    this.tail = current;
    return deletedTail;
  }

  peek() {
    if (!this.tail) return null;
    return this.tail.value;
  }
}

module.exports = {
  Stack
};