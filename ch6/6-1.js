export function printOwing(invoice) {
  printBanner()
  let outstanding = calculateOutstanding(invoice)
  recordDueDate(invoice)
  printDetails(invoice, outstanding)
}

const printBanner = () => {
  console.log('***********************')
  console.log('**** Customer Owes ****')
  console.log('***********************')
}

const calculateOutstanding = (invoice) => {
  let result = 0
  for (const o of invoice.orders) {
    result += o.amount
  }
  return result
}

const recordDueDate = (invoice) => {
  const today = new Date()
  invoice.dueDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 30
  )
}

const printDetails = (invoice, outstanding) => {
  console.log(`name: ${invoice.customer}`)
  console.log(`amount: ${outstanding}`)
  console.log(`due: ${invoice.dueDate.toLocaleDateString()}`)
}

const invoice = {
  orders: [{ amount: 2 }, { amount: 5 }],
  customer: '엘리',
}

printOwing(invoice)
