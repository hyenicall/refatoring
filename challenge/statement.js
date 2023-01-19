// 1. 데이터 받기
// 2. 데이터 가공
// 3. 데이터 출력

export function statement(invoice, plays) {
  const statement = {}
  statement.customer = invoice.customer
  statement.performances = invoice.performances.map(enrichPerformance)
  statement.totalAmount = totalAmount(statement.performances)
  statement.totalCredits = totalCredits(statement.performances)
  return renderPlainText(statement, plays)

  function enrichPerformance(performance) {
    const result = { ...performance }
    result.play = playFor(performance)
    result.amount = amountFor(result)
    result.credit = creditsFor(result)
    return result
  }

  function playFor(performance) {
    return plays[performance.playID]
  }

  function amountFor(performance) {
    let result = 0
    switch (performance.play.type) {
      case 'tragedy': // 비극
        result = 40000
        if (performance.audience > 30) {
          result += 1000 * (performance.audience - 30)
        }
        break
      case 'comedy': // 희극
        result = 30000
        if (performance.audience > 20) {
          result += 10000 + 500 * (performance.audience - 20)
        }
        result += 300 * performance.audience
        break
      default:
        throw new Error(`알 수 없는 장르: ${performance.play.type}`)
    }
    return result
  }

  function creditsFor(performance) {
    let result = 0
    result += Math.max(performance.audience - 30, 0)
    // 희극 관객 5명마다 추가 포인트를 제공한다.
    if ('comedy' === performance.play.type) {
      result += Math.floor(performance.audience / 5)
    }
    return result
  }

  function totalAmount(performances) {
    return performances.reduce((sum, p) => (sum += p.amount), 0)
  }

  function totalCredits(performances) {
    return performances.reduce((sum, p) => (sum += p.credit), 0)
  }
}

function renderPlainText(statement) {
  let result = `청구 내역 (고객명: ${statement.customer})\n`

  for (let perf of statement.performances) {
    result += `  ${perf.play.name}: ${usd(perf.amount / 100)} (${
      perf.audience
    }석)\n`
  }

  result += `총액: ${usd(statement.totalAmount / 100)}\n`
  result += `적립 포인트: ${statement.totalCredits}점\n`
  return result
}

function usd(number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  }).format(number)
}

// 사용예:
const playsJSON = {
  hamlet: { name: 'Hamlet', type: 'tragedy' },
  'as-like': { name: 'As You Like It', type: 'comedy' },
  othello: { name: 'Othello', type: 'tragedy' },
}

const invoicesJSON = [
  {
    customer: 'BigCo',
    performances: [
      {
        playID: 'hamlet',
        audience: 55,
      },
      {
        playID: 'as-like',
        audience: 35,
      },
      {
        playID: 'othello',
        audience: 40,
      },
    ],
  },
]

const result = statement(invoicesJSON[0], playsJSON)
const expected =
  '청구 내역 (고객명: BigCo)\n' +
  '  Hamlet: $650.00 (55석)\n' +
  '  As You Like It: $580.00 (35석)\n' +
  '  Othello: $500.00 (40석)\n' +
  '총액: $1,730.00\n' +
  '적립 포인트: 47점\n'
console.log(result)
console.log(result === expected)
