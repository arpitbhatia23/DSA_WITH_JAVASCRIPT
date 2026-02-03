class node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class CircularLinkList {
  constructor(head, tail) {
    this.head = head;
    this.tail = tail;
  }

  append(value) {
    let temp = new node(value);
    if (!this.head) {
      this.head = temp;
      this.tail = temp;
      temp.next = this.head;
    }
    this.tail.next = temp;
    temp.next = this.head;
    this.tail = temp;
  }
  prepend(value) {
    let temp = new node(value);
    temp.next = this.head.next;
    this.head = temp;
    this.tail.next = this.head;
  }
  insertAtMid(value, x) {
    if (!this.head) return;

    let current = this.head;
    let temp = new node(value);

    do {
      if (current.data === x) {
        temp.next = current.next;
        current.next = temp;

        // If inserting after tail, update tail
        if (current === this.tail) {
          this.tail = temp;
        }

        return; // stop after first insertion
      }

      current = current.next;
    } while (current !== this.head);
  }
  delete(value) {
    if (!this.head) return;
    let current = this.head;
    let prev = this.tail;

    do {
      if (current.data === value) {
        if (current === this.head) this.head = current.next;
        if (current === this.tail) this.tail = prev;
        prev.next = current.next;
        if (current === this.tail) this.tail.next = this.head;
        return;
      }
      prev = current;
      current = current.next;
    } while (current !== this.head);
  }
  print() {
    let current = this.head;
    let result = "";
    do {
      result += current.data + "<-->";
      current = current.next;
    } while (current !== this.head);
    console.log(result);
  }
}
const obj = new CircularLinkList();

obj.append(10);
obj.append(20);
obj.append(30);
obj.prepend(0);
obj.insertAtMid(25, 20);
obj.delete(30);
obj.print();
