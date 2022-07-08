export function printOwing(invoice) {
  console.log('***********************')
  console.log('**** Customer Owes ****')
  console.log('***********************')

  const outstanding = calculateOutstanding(invoice)
  checkDueDate(invoice)
  checkLog(invoice, outstanding)
}

const invoice = {
  orders: [{ amount: 2 }, { amount: 5 }],
  customer: '엘리',
}

const calculateOutstanding = (invoice) => {
  let outstanding = 0
  for (const o of invoice.orders) {
    outstanding += o.amount
  }
  return outstanding
}

const checkDueDate = (invoice) => {
  const today = new Date()
  invoice.dueDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 30
  )
}

const checkLog = (invoice, outstanding) => {
  console.log(`name: ${invoice.customer}`)
  console.log(`amount: ${outstanding}`)
  console.log(`due: ${invoice.dueDate.toLocaleDateString()}`)
}

printOwing(invoice)
