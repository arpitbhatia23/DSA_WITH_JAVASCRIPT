class Deque {
  constructor() {
    this.queue = [];
  }
  insertF(value) {
    this.queue.unshift(value);
  }
  deletionF() {
    if (this.isEmpty()) {
      throw Error("Queue is empty");
    }
    return this.queue.shift();
  }
  insertR(value) {
    this.queue.push(value);
  }
  deletionR() {
    if (this.isEmpty()) {
      throw Error("Queue is empty");
    }
    return this.queue.pop();
  }
  isEmpty() {
    return this.queue.length === 0 ? true : false;
  }
  print() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
      return;
    }

    let output = "FRONT <-> ";
    for (let i = 0; i < this.queue.length; i++) {
      output += `| ${this.queue[i]} `;
    }
    output += "|  <-> REAR";

    console.log("\nQueue Visualization:\n");
    console.log(output);
  }
}

const doubleEnded = new Deque();
console.log("inset at rear");
doubleEnded.insertR(60);
doubleEnded.insertR(70);
doubleEnded.insertR(80);
doubleEnded.print();
console.log("inset at front");

doubleEnded.insertF(10);
doubleEnded.insertF(20);
doubleEnded.insertF(30);
doubleEnded.print();
console.log("delete at front");

doubleEnded.deletionF();
doubleEnded.print();
console.log("delete at rear");

doubleEnded.deletionR();
doubleEnded.print();
