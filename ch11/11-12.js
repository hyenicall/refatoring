function localShippingRules(data) {
  if (data) return new ShippingRules(data)
  else throw new OrderProcessionError(-23)
}

class OrderProcessionError extends Error {
  constructor(errorCode) {
    super()
    this.errorCode = errorCode
  }
}

try {
  const result = localShippingRules()
} catch (error) {
  if (error instanceof OrderProcessionError) {
    console.log(error)
  }
}
