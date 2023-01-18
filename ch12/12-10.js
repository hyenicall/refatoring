// 상속
class Printer {
  print() {
    console.log('기본적인 출력')
  }
}

class RedPrinter extends Printer {
  print() {
    console.log('red출력!')
  }
}

// 상속은 다중상속이 불가능하기 때문에 수정, 확장이 어려움

const printers = [new Printer(), new RedPrinter()]
printers.forEach((printer) => printer.print())
