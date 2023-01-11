class Person {
  #name
  #telephoneNumber
  constructor(name, areaCode, number) {
    this.#name = name
    this.#telephoneNumber = new TelephoneNumber(areaCode, number)
  }

  get name() {
    return this.#name
  }

  set name(arg) {
    this.#name = arg
  }

  get telephoneNumber() {
    return this.#telephoneNumber.toString
  }

  get officeAreaCode() {
    return this.#telephoneNumber.areaCode
  }

  set officeAreaCode(value) {
    this.#telephoneNumber = new TelephoneNumber(value, this.officeNumber)
  }

  get officeNumber() {
    return this.#telephoneNumber.number
  }

  set officeNumber(value) {
    this.#telephoneNumber.number = new TelephoneNumber(
      this.officeAreaCode,
      value
    )
  }
}

class TelephoneNumber {
  #areaCode
  #number
  constructor(area, number) {
    this.#areaCode = area
    this.#number = number
  }

  get areaCode() {
    return this.#areaCode
  }

  get number() {
    return this.#number
  }

  get toString() {
    return `(${this.#areaCode}) ${this.#number}`
  }
}

const person = new Person('엘리', '010', '12345678')
console.log(person.name)
console.log(person.officeAreaCode)
console.log(person.officeNumber)
console.log(person.telephoneNumber)

// Q : 새로운 값으로 바꿀때 마다 새로운 인스턴스를 만들게 되면 메모리낭비?
// A : 메모리 최적화를 하지마라 정말 문제가 된다면 측정 후 개선하면 됨
// 인스턴스를 만드는 것은 성능에 큰 문제가 없음 (안정성이 더 중요)
