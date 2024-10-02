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
const sumToDecade = new ArgMaker(sumToTargets, [[10, 20, 30, 40, 50, 60, 70, 80, 90]])
console.log(sumToDecade.makeArgs())
// Note the above can give 50+10 = 60
const sumToCentury = new ArgMaker(sumToTargets, [[100, 200, 300, 400, 500, 600, 700, 800, 900]])
console.log(sumToCentury.makeArgs())