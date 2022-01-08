const rFuncs = require('../../nonQ/randFuncs');

const ofamountQ = (percent, amount) => {
    let ans = (percent * amount) / 100
    return {
        q: `What is ${percent}% of ${amount}?`,
        a: ans,
        qFeedback: `${percent}% of ${amount} is ${ans}`
    }
}

const selector = {
    'multiplesOf25%': (percent) => {
        const conv = { 25: '1/4', 50: '1/2', 75: '3/4' }
        return {
            hints: [
                `Can you convert ${percent}% into a fraction?`,
                `${percent}% is the same as ${conv[percent]}`,
                `If you can't find a fraction of an amount, \npractise that as a seperate skill in the building blocks`
            ],
            buildingBlocks: ['fraction-ofAmount-oneSlice-70', 'fraction-ofAmount-manySlices-120']
        }
    },
    'multiplesOf10%': (percent) => {
        return {
            hints: [
                `Can you convert ${percent}% into a fraction?`,
                `${percent}% is the same as ${percent}/100, which simplifies to...?`,
                `${percent}% of an amount is the same as ${(percent / 10)}/10 of an amount`,
                `If you can't find a fraction of an amount, \npractise that as a seperate skill in the building blocks`
            ],
            buildingBlocks: ['fraction-ofAmount-manySlices-120']
        }
    },
    'multiplesOf5%': (percent) => {
        const hints = [];
        if (percent === 5) {
            hints.push('5% is half of 10%')
        } else {
            hints.push(`${percent}% is the same as ${percent - 5}% plus another 5%`)
        }
        hints.push(`If you can't find 10, 20, 30... percent of an amount, \npractise that as a seperate skill in the building blocks`)
        return { hints, buildingBlocks: ['percent-ofAmount-multiplesOf10%-80'] }
    },
    'multiplesOf1%': (percent) => {
        return {
            hints: [
                `Either convert ${percent}% into a fraction or into a decimal`,
                `${percent}% is ${percent}/100 = 0.${percent}`,
                `Now use either fractions of an amount, or ... (next hint)`,
                `${percent}% of and amount is the same as 0.${percent} x the amount`
            ],
            buildingBlocks: ['number-multiplying-ab*c.d-110', 'fraction-ofAmount-manySlices-120']
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