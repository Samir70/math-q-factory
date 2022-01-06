const rFuncs = require('../../nonQ/randFuncs');

const ofamountQ = (percent, amount) => {
    return {
        q: `What is ${percent}% of ${amount}?`,
        a: (percent * amount) / 100
    }
}

const selector = {
    'multiplesOf25%': (percent, amoount) => {
        const conv = { 25: '1/4', 50: '1/2', 75: '3/4' }
        return {
            hints: [
                `Can you convert ${percent}% into a fraction?`,
                `${percent}% is the same as ${conv[percent]}`,
                `If you can't find a fraction of an amount, \npractise that as a seperate skill in the building blocks`
            ]
        }
    },
    'multiplesOf10%': (percent, amoount) => {
        return {
        }
    },
    'multiplesOf5%': (percent, amoount) => {
        return {
        }
    },
    'multiplesOf1%': (percent, amoount) => {
        return {
        }
    }
}

const types = {
    'multiplesOf25%': [25, 50, 75],
    'multiplesOf10%': [10, 20, 30, 40, 60, 70, 80, 90],
    'multiplesOf5%': [5, 15, 35, 45, 55, 65, 85, 95]
}

const percentSetup = (qName) => {
    if (selector[qName] === undefined) {
        return { q: 'Default percent-ofAmount- Q' }
    }
    let percent = 10
    if (qName === 'multiplesOf1%') {
        while (percent % 5 === 0) {
            percent = rFuncs.randomInt(99) + 1
        }
    } else {
        percent = rFuncs.randomElement(types[qName])
    }
    let amount = (rFuncs.randomInt(19) + 1) * 20
    if (qName === 'multiplesOf1%') { amount *= 10 }
    return {
        qType: 'shortAnswer',
        ...ofamountQ(percent, amount),
        ...selector[qName](percent, amount)
    }
}

module.exports = {
    sectionName: 'ofAmount',
    qGetter: percentSetup
}