export function adjustedCapital(instrument) {
  return isEligibleForAdjustedCapotal(instrument)
    ? (instrument.income / instrument.duration) * anInstrument.adjustmentFactor
    : 0
}

function isEligibleForAdjustedCapotal(instrument) {
  return (
    instrument.capital > 0 &&
    instrument.interestRate > 0 &&
    instrument.duration > 0
  )
}
