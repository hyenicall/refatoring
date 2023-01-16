const values = []
function getValueForPeriod(periodNumber) {
  return values[periodNumber] ?? 0
  // if (periodNumber < 0 || periodNumber >= values.length) {
  //   return 0
  // }
  // returnvalues[periodNumber]
}

getValueForPeriod(-10)
