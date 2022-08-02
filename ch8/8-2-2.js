class Account {
  #number
  #type
  #interestRate
  constructor(number, type) {
    this.#number = number
    this.#type = type
  }

  get interestRate() {
    return this.#type.interestRate
  }
}

class AccountType {
  #name
  #interestRate
  constructor(nameString, interestRate) {
    this.#name = nameString
    this.#interestRate = interestRate
  }

  get interestRate() {
    return this.#interestRate
  }
}
