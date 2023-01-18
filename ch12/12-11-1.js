class List {}

// class Stack extends List {}  // 이렇게 상속하면 불필요한 API까지 전부 다 상속 됨

class Stack {
  constructor() {
    this.storage = new List()
  }

  pop() {}

  push() {}
}
