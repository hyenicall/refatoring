// 예제 1
class Order {
  // 다른 코드 있다고 가정
  get discountedTotal() {
    return this._basePrice - this.discount
  }
  set discount(value) {
    // 기존 : discount와 discountedTotal이 같이 update됨(스파게티코드)
    // const old = this._discount
    this._discount = value
    // this._discountedTotal += old - value
  }
}

// 예제 2
class ProductionPlan {
  // 다른 코드 있다고 가정
  get production() {
    return this._production.reduce((sum, a) => sum + a.amount, 0)
  }
  applyAdjustment(adjustment) {
    this._adjustments.push(adjustment)
    // this._production += adjustment.amount
  }
}
