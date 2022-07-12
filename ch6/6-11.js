export function priceOrder(product, quantity, shippingMethod) {
  const basePrice = calculateBasePrice(product, quantity)
  const discount = calculateDiscount(product, quantity)
  const shippingCost = calculateShippingCost(product, quantity, shippingMethod)
  return basePrice - discount + shippingCost
}

const product = {
  basePrice: 10,
  discountRate: 0.1,
  discountThreshold: 10,
}

const shippingMethod = {
  discountThreshold: 20,
  feePerCase: 5,
  discountedFee: 3,
}

function calculateBasePrice(product, quantity) {
  return product.basePrice * quantity
}
function calculateDiscount(product, quantity) {
  return (
    Math.max(quantity - product.discountThreshold, 0) *
    product.basePrice *
    product.discountRate
  )
}
function shippingPerCase(product, quantity, shippingMethod) {
  return calculateBasePrice(product, quantity) >
    shippingMethod.discountThreshold
    ? shippingMethod.discountedFee
    : shippingMethod.feePerCase
}
function calculateShippingCost(product, quantity, shippingMethod) {
  return quantity * shippingPerCase(product, quantity, shippingMethod)
}

const price = priceOrder(product, 5, shippingMethod)
console.log(price)
