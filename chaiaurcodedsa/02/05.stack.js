class Stack {
  constructor() {
    this.s = [];
  }
  lenght() {
    return this.s.length;
  }
  push(value) {
    this.s.push(value);
  }
  pop() {
    if (this.isempty()) {
      throw Error("stack is empty");
    }
    return this.s.pop();
  }
  peek() {
    if (this.isempty()) {
      throw Error("stack is empty");
    }
    console.log(this.s[this.lenght() - 1]);
  }
  isempty() {
    return this.lenght() === 0 ? true : false;
  }
  print() {
    if (this.s.length === 0) {
      console.log("Stack is empty");
      return;
    }

    console.log("\nStack Visualization:\n");

    for (let i = this.s.length - 1; i >= 0; i--) {
      console.log("   ┌───────┐");
      console.log(
        `   │  ${this.s[i]}   │${i === this.s.length - 1 ? "  ← TOP" : ""}`,
      );
    }
    console.log("   └───────┘\n");
  }
}

const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);
stack.push(50);
stack.print();
stack.pop();
stack.peek();
console.log(stack.lenght());
stack.print();
