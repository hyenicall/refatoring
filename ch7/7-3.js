export class Order {
  #priority
  constructor(data) {
    this.#priority = new Priority(data.Priority)
  }

  isHighPriority() {
    return this.priority.higherThan('nomal')
  }
}

class Priority {
  #value
  #index
  constructor(value) {
    if (Priority.legalValues().includes(value)) {
      this.#value = value
    } else {
      throw new Error(`${value} is invalid for Priority`)
    }
  }

  get index() {
    return Priority.legalValues().indexOf(this.#value)
  }

  equals(other) {
    return this.#index > other.index
  }
  higherThan(other) {
    return this.#index > other.index
  }
  static legalValues() {
    return ['low', 'nomal', 'high', 'rush']
  }
}

const orders = [
  new Order({ priority: 'normal' }),
  new Order({ priority: 'high' }),
  new Order({ priority: 'rush' }),
]

const highPriorityCount = orders.filter((o) => o.isHighPriority()).length
console.log(highPriorityCount)
