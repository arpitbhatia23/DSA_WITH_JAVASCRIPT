class node {
  constructor(info, next = null) {
    this.info = info;
    this.next = next;
  }
}

class singlyLinklist {
  constructor(head = null) {
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
    current.next = temp;
    temp = null;
  }
  prepend(value) {
    let temp = new node(value);

    temp.next = this.head;
    this.head = temp;
    temp = null;
  }

  insertInMid(value, x) {
    let temp = new node(value);
    let current = this.head;
    while (current.next) {
      if (current.info == x) {
        temp.next = current.next;
        current.next = temp;
        return;
      }
      current = current.next;
    }
  }
  delete(value) {
    let current = this.head;
    let prev = current;

    if (this.head.info == value) {
      this.head = current.next;
    }

    while (current.next) {
      if (current.info == value) {
        prev.next = current.next;
        return;
      }

      prev = current;
      current = current.next;
    }
    if (current.info == value) {
      prev.next = current.next;
    }
  }
  print() {
    let current = this.head;
    let result = "";
    while (current) {
      result += current.info + "->";
      current = current.next;
    }
    console.log(result);
  }
}

const link = new singlyLinklist();

link.append(10);
link.append(20);
link.append(30);
link.append(40);
link.prepend(0);
link.insertInMid(35, 30);
link.delete(40);
link.print();
