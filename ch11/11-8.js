// 생성자 캡슐화 하기
export class Employee {
  // JS는 생성자를 private으로 만들 수 없음
  constructor(name, typeCode) {
    this._name = name
    this._typeCode = typeCode
  }
  get name() {
    return this._name
  }

  get type() {
    return Employee.legalTypeCodes[this._typeCode]
  }

  static get legalTypeCodes() {
    return { E: 'Engineer', M: 'Manager', S: 'Salesman' }
  }

  static createEngineer(name) {
    return new Employee(name, 'E')
  }

  static createSeniorEngineer(name) {
    return new Employee(name, 'SE')
  }

  static createMarketer(name) {
    return new Employee(name, 'M')
  }
}

const employee = Employee.createEngineer('JH')
