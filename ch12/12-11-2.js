class Scroll {
  constructor(id, dataLastCleaned, CatalogItem) {
    this._id = id
    this._lastCleaned = dataLastCleaned
  }

  get id() {
    return this._id
  }

  get title() {
    return this._title
  }

  hasTag(arg) {
    return this._tags.includes(arg)
  }

  needsCleaning(targetDate) {
    const threshold = this.hasTag('revered') ? 700 : 1500

    return this.daysSinceLastCleaning(targetDate) > threshold
  }

  daysSinceLastCleaning(targetDate) {
    return this._lastCleaned.until(targetDate, ChronoUnit.DAYS)
  }
}
