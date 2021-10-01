const rand = require('../lib/nonQ/randFuncs')

console.log({
    randomNames: rand.randomNames(3),
    randomPrime: rand.randomPrime('small'),
    randomPrimeLarge: rand.randomPrime('big'),
    randomPrimeFactorisation: rand.random2357(3)
})