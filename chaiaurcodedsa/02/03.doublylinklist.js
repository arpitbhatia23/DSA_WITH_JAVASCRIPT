class node {
  constructor(data, prev = null, next = null) {
    this.prev = prev;
    this.data = data;
    this.next = next;
  }
}

class DoublyLinkList {
  constructor(head) {
    this.head = head;
  }
  append(value) {
    let temp = new node(value);
    if (!this.head) {
      this.head = temp;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    temp.prev = current;
    current.next = temp;
  }

  prepend(value) {
    let temp = new node(value);
    if (!this.head) {
      this.head = temp;
      return;
    }
    let current = this.head;
    temp.next = current;
    current.prev = temp;
    this.head = temp;
  }
  insertAtMid(value, x) {
    let temp = new node(value);
    if (!this.head) {
      this.head = temp;
    }
    let current = this.head;
    while (current.next) {
      if (current.data == x) {
        temp.prev = current;
        temp.next = current.next;
        current.next.prev = temp;
        current.next = temp;
        return;
      }
      current = current.next;
    }
  }
  delete(value) {
    let current = this.head;
    if (this.head.data == value) {
      current.prev = null;
      this.head = current.next;
    }
    while (current.next) {
      if (current.data == value) {
        current.next.prev = current.prev;
        current.prev.next = current.next;
        return;
      }
      current = current.next;
    }
    if (current.data == value) {
      current.prev.next = null;
    }
  }

  print() {
    let current = this.head;
    let result = "";
    while (current) {
      result += current.data + "<-->";
      current = current.next;
    }
    console.log(result);
  }
}

const obj = new DoublyLinkList();
obj.append(10);
obj.append(20);
obj.append(30);
obj.prepend(0);
obj.insertAtMid(25, 20);
obj.delete(30);
obj.print();
