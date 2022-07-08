export default class Book {
  #reservations
  constructor() {
    this.#reservations = []
  }

  addReservation(customer, isPriority) {
    this.#reservations.push(customer)
  }

  hasReservation(customer) {
    return this.#reservations.some(
      (reservedCustomer) => reservedCustomer.id === customer.id
    )
  }
}
