function calculateCharge(date, quantity, plan) {
  return isSummer() ? summerCharge() : regularCharge()

  function isSummer() {
    return !date.isBefore(plan.summerStart) && !date.isAfter(plan.summerEnd)
  }

  function summerCharge() {
    return (charge = quantity * plan.summerRate)
  }

  function regularCharge() {
    return (charge = quantity * plan.regularRate + plan.regularServiceCharge)
  }
}
