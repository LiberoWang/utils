class Queue {
  constructor() {
    this.items = [];
  }

  // 队尾进队
  push(item) {
    this.items.push(item);
  }

  // 队首出队
  dequeue() {
    return this.items.shift();
  }

  // 查看队首元素
  front() {
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  // 将队列中的元素以字符串形式输出
  toString() {
    let stringLen = '';

    for (let i of this.items) {
      stringLen += i + ''
    }

    return stringLen;
  }
}


class QueueElement {
  constructor(element, priority) {
    this.element = element;
    this.priority = priority;
  }
}


class PriorityQueue {
  constructor() {
    this.items = [];
  }

  // 插入元素
  enqueue(element, priority) {
    // 创建QueueElement对象
    let queueElement = new QueueElement(element, priority);

    // 判断队列是否为空
    if (this.items.length === 0) {
      this.items.push(queueElement);
      return;
    }

    // 定义一个变量记录是否成功添加了新元素
    let added = false;

    for (let i of this.items) {
      // 新插入的元素与原来的元素进行优先级比较(priority越小，优先级越大)
      if (queueElement.priority < i.priority) {
        this.items.splice(i, 0, queueElement);
        added = true;
        // 新元素插入之后就跳出循环
        return;
      }
    }
    // 新元素没有成功插入
    if (!added) {
      this.items.push(queueElement);
    }
  }
  
  /**
   * 以下方法同普通的队列实现一致
   */
  // dequeue
  // isEmpty
  // size
  // toString
}