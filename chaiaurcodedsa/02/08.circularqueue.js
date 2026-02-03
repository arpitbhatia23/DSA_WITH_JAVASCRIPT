class CirculareQueue {
  constructor(size) {
    this.size = size;
    this.queue = new Array(size);
    this.front = -1;
    this.rear = -1;
  }
  enqueue(value) {
    if ((this.rear + 1) % this.size == this.front) {
      console.log("queue is full");
    } else if (this.front == -1) {
      this.front = this.rear = 0;
      this.queue[this.rear] = value;
    } else {
      this.rear = (this.rear + 1) % this.size;
      this.queue[this.rear] = value;
    }
  }

  dequeueu() {
    if (this.front == -1) {
      console.log("queue is empty");
    } else if (this.front == this.rear) {
      this.front = this.rear = -1;
    } else {
      this.front = (this.front + 1) % this.size;
    }
  }
}

const cir = new CirculareQueue(4);

cir.enqueue(10);
cir.enqueue(20);
cir.enqueue(30);
cir.enqueue(40);
cir.dequeueu();
cir.enqueue(50);
// cir.enqueue(60);
cir.dequeueu();
cir.dequeueu();
cir.dequeueu();
cir.dequeueu();
cir.dequeueu();
