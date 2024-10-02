function defaultArgMaker() {
  return [...arguments]
}

function ArgMaker(func = defaultArgMaker, args = []) {
  this.args = args
  this.argMaker = func
}

ArgMaker.prototype.makeArgs = function () {
  return this.argMaker(...this.args)
}

module.exports = { ArgMaker }



// informal testing:
const { randomInt, randomElement } = require('../nonQ/randFuncs')


const sumToTargets = (targetList) => {
  let target = randomElement(targetList)
  let a = 5 + randomInt(target - 5)
  return [a, target - a]
}
const sumTo25 = new ArgMaker(sumToTargets, [[10, 20, 30, 40, 50, 60, 70, 80, 90]])
console.log(sumTo25.makeArgs(1, 2, 3, "hello"))