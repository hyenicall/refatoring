import { acquireReading, enrichReading } from './6-10.js'

const raweading = acquireReading()
const reading = enrichReading(raweading)

console.log(reading.baseCharge)
console.log(reading.taxableCharge)
