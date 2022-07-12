export function priceOrder(product, quantity, shippingMethod) {
  const price =
    basePrice(product, quantity) -
    discount(product, quantity) +
    shippingCost(product, quantity, shippingMethod)

  return price
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

function basePrice(product, quantity) {
  return product.basePrice * quantity
}
function discount(product, quantity) {
  return (
    Math.max(quantity - product.discountThreshold, 0) *
    product.basePrice *
    product.discountRate
  )
}
function shippingPerCase(product, quantity, shippingMethod) {
  return basePrice(product, quantity) > shippingMethod.discountThreshold
    ? shippingMethod.discountedFee
    : shippingMethod.feePerCase
}
function shippingCost(product, quantity, shippingMethod) {
  return quantity * shippingPerCase(product, quantity, shippingMethod)
}

const price = priceOrder(product, 5, shippingMethod)
console.log(price)
