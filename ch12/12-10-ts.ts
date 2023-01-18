// 컴포시션(위임)
class Printer {
  private printerHeader: PrinterHeader
  constructor(printerHeader?: PrinterHeader) {
    this.printerHeader = printerHeader
      ? printerHeader
      : new DefaultPrinterHeader()
  }
  print() {
    this.printerHeader
      ? this.printerHeader.print()
      : console.log('기본적인 출력')
  }
}

interface PrinterHeader {
  print(): void
}

class DefaultPrinterHeader {
  print() {
    console.log('기본적인 출력')
  }
}

class RedPrinterHeader implements PrinterHeader {
  print() {
    console.log('red출력!')
  }
}

class BlackPrinterHeader implements PrinterHeader {
  print() {
    console.log('black출력!')
  }
}

const printers = [
  new Printer(),
  new Printer(new RedPrinterHeader()),
  new Printer(new BlackPrinterHeader()),
]
printers.forEach((printer) => printer.print())
