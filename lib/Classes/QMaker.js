class QMaker {
  constructor(formater, pickArgs, validateArgs) {
    this.qFormater = formater
    this.pickArgs = pickArgs
    this.validateArgs = validateArgs
  }
  makeQ(a, b) {
    if (a === undefined || b === undefined || !this.validateArgs(a, b)) {
      [a, b] = this.pickArgs()
    }
    return this.qFormater(a, b)
  }
}

module.exports = { QMaker }