class Hotel {
  constructor() {
    this.rooms = []
  }
  addRoom(roomNumber) {
    this.rooms[roomNumber] = new Room(roomNumber)
  }

  emptyRoom(roomNumber) {
    this.rooms[roomNumber] = new EmptyRoom()
  }
  cleanRooms() {
    this.rooms.forEach((room) => room.clean())
  }
}
class Room {
  constructor(roomNumber) {
    this.roomNumber = roomNumber
  }
  clean() {
    console.log(`${this.roomNumber} clean!!`)
  }
}

class EmptyRoom extends Room {
  clean() {
    console.log(`${this.roomNumber} empty!!`)
  }
}

const hotel = new Hotel()
hotel.addRoom(0)
hotel.addRoom(1)
hotel.cleanRooms()
hotel.emptyRoom(0)
hotel.cleanRooms()
export class Site {
  constructor(customer) {
    this._customer = customer
  }

  get customer() {
    return this._customer === 'unknown' ? new UnknownCustomer() : new Customer()
  }
}

export class Customer {
  constructor(name) {
    this._name = name
  }

  get name() {
    return this._name
  }

  get billingPlan() {
    //
  }

  set billingPlan(arg) {
    //
  }

  get paymentHistory() {
    //
  }
}

class UnknownCustomer extends Customer {
  get name() {
    return 'occupant'
  }
}

// 사용하는 부분
export function customerName(site) {
  const aCustomer = site.customer
  // 더 많은 코드가 여기에 있음
  customerName = aCustomer.name
  return customerName
}
