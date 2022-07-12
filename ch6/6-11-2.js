import fs from 'fs'

//1. run 함수를 만들어서 노드의 process디펜던시를 제거함
run(process.argv)

//2. 사용자에게 입력을 받아옴 -> 유효성 검사
function run(args) {
  countOrders(parseCommand(args))
}

function parseCommand(args) {
  if (!args[2]) {
    throw new Error('파일 이름을 입력하세요')
  }

  const fileName = `./${args[2]}.json`
  if (!fs.existsSync(fileName)) {
    throw new Error('파일이 존재하지 않습니다')
  }
  const countReadOnly = args.includes('-r')
  return {
    fileName,
    countReadOnly,
  }
}

function countOrders(command) {
  const rawData = fs.readFileSync(fileName)
  const orders = JSON.parse(rawData)
  const filtered = command.countReadOnly
    ? orders.filter((order) => order.status === 'ready')
    : orders
  console.log(filtered.length)
}
