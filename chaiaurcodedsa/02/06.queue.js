class Queue {
  constructor() {
    this.q = [];
    this.front = -1;
    this.rear = -1;
  }
  enqueue(value) {
    this.q.push(value);
  }
  dequeue() {
    if (this.q.length === 0) {
      throw Error("queue is empty");
    }
    return this.q.shift();
  }
  isEmpty() {
    return this.q.length === 0 ? true : false;
  }
  print() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
      return;
    }

    let output = "FRONT →  ";
    for (let i = 0; i < this.q.length; i++) {
      output += `| ${this.q[i]} `;
    }
    output += "|  ← REAR";

    console.log("\nQueue Visualization:\n");
    console.log(output);
  }
}

let queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.print();
queue.enqueue(40);
console.log(queue.dequeue());
queue.print();
