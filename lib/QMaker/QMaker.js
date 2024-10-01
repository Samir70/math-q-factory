const { randomInt } = require('../nonQ/randFuncs')
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

const qFormater = (a, b) => {
  return {
    q: `Calculate ${a} + ${b}`,
    a: a + b
  }
}

const validateArgs = (a, b) => (a + b) % 10 === 0

const pickArgs = () => {
  let a = 1 + randomInt(9)
  let b = (1 + randomInt(8)) * 10
  return [a, b - a]
}

let sumToDecade = new QMaker(qFormater, pickArgs, validateArgs)
q = sumToDecade.makeQ(6, 14)
console.log(q)

module.exports = { QMaker }