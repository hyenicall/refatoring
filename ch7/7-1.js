class Organization {
  #rawData
  #name
  #country

  constructor(data) {
    //주로 서버와 통신할 때 json형식의 데이터가 넘어오기 때문에 data로 받고 풀어서 사용하기도 함
    this.#rawData = data //raw데이터를 보관하고 싶다면
    this.#name = data.name
    this.#country = data.country
  }

  get name() {
    return this.#name
  }
  set name(value) {
    this.#name = value
  }
  get country() {
    return this.#country
  }
  set country(value) {
    this.#country = value
  }
  get rawData() {
    return { ...this.#data } //데이터를 넘길때 얕은복사를 이용
  }
}

const organization = new Organization('Acme Gooseberries', 'GB')
console.log(organization.name)
console.log(organization.country)

organization.name = 'Dream Coding'
console.log(organization.name)
console.log(organization.country)
