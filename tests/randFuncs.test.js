const rand = require('../lib/nonQ/randFuncs')

console.log({
    randomNames: rand.randomNames(3),
    randomColours: rand.randomColours(4),
    randomPrime: rand.randomPrime('small'),
    randomPrimeLarge: rand.randomPrime('big'),
    randomPrimeFactorisation: rand.random2357(3),
    rand15From10To20: rand.nRandomInts(15, 20, 10)
})