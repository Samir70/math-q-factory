const rFuncs = require('../../nonQ/randFuncs');

const ofamountQ = (percent, amount) => {
    return {
        q: `What is ${percent}% of ${amount}?`,
        a: (percent * amount) / 100
    }
}

const types = { 'multiplesOf25%': [25, 3], 'multiplesOf5%': [5, 19], 'multiplesOf1%': [1, 99] }

const percentSetup = (qName) => {
    if (types[qName] === undefined) {
        return { q: 'Default percent-ofAmount- Q' }
    }
    let [a, b] = types[qName]
    let percent = a * (rFuncs.randomInt(b) + 1)
    let amount = (rFuncs.randomInt(19) + 1) * 20
    if (qName === 'multiplesOf1%') { amount *= 10 }
    return ofamountQ(percent, amount)
}

module.exports = {
    sectionName: 'ofAmount',
    qGetter: percentSetup
}