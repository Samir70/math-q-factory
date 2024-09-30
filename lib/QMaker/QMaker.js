const { randomInt } = require('../nonQ/randFuncs')
class QMaker {
  constructor(formater, pickArgs, numArgs) {
    this.qFormater = formater
    this.pickArgs = pickArgs
  }
  makeQ(a, b) {
    if (a === undefined) { [a, b] = this.pickArgs() }
    return this.qFormater(a, b)
  }
}

const qFormater = (a, b) => {
  return {
    q: `Calculate ${a} + ${b}`,
    a: a + b
  }
}

const pickArgs = () => {
  let a = 1 + randomInt(9)
  let b = (1 + randomInt(8)) * 10
  return [a, b - a]
}

let sumToDecade = new QMaker(qFormater, pickArgs, 2)
q = sumToDecade.makeQ()
console.log(q)

module.exports = { QMaker }