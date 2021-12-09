class Stack {
  constructor() {
    this.items = [];
  }

  push(item) {
    this.items.push(item);
  }

  pop() {
    return this.items.pop();
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  toString() {
    let stringLen = '';
    for (let i = 0; i < this.items.length; i++) {
      stringLen += this.items[i] + '';
    }
    return stringLen;
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);

stack.pop();

stack.isEmpty();
stack.size();
stack.toString();
