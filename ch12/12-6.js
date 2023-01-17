class Employee {
  #name
  constructor(name) {
    // 생성자는 private으로 설정하지 못함
    this.#name = name
  }

  get type() {
    return 'employee'
  }

  toString() {
    return `${this.#name} (${this.type})`
  }

  static createEmployee(name, type) {
    Employee.validateType(type)
    switch (type) {
      case 'engineer':
        return new Engineer(name, type)
      case 'salesperson':
        return new Salesperson(name, type)
      case 'manager':
        return new Manager(name, type)
      default:
        throw new Error(`${arg}라는 직원 유형은 없습니다.`)
    }
  }
}

class Engineer extends Employee {
  get type() {
    return 'engineer'
  }
}

class Manager extends Employee {
  get type() {
    return 'manager'
  }
}

class Salesperson extends Employee {
  get type() {
    return 'salesperson'
  }
}

const ellie = new Engineer('엘리')
const bob = new Manager('밥')
