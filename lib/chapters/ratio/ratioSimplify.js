const rFuncs = require('../../nonQ/randFuncs');
const { simplifyWithUnits } = require('./ratioSimplifyWithUnits');

const selector = {
    noUnits1: (ratio, m) => {
        let qRatio = ratio.map(n => n * m).join(':')
        return {
            qType: 'shortAnswer',
            q: `Simplify ${qRatio}`, a: ratio.join(':'),
            hints: [
                `What divides ${ratio.length === 2 ? 'both' : 'each'} of the numbers in the ratio?`,
                `You can divide the numbers in the ratio by ${m}`,
            ],
            buildingBlocks: [],
            qFeedback: `If you divide each number in ${qRatio} by ${m} you get ${ratio.join(':')}`
        }
    },
    noUnits2: (ratio, m, ms) => {
        let qRatio = ratio.map(n => n * m)
        return {
            qType: 'shortAnswer',
            q: `Simplify ${qRatio.join(':')}`, a: ratio.join(':'),
            hints: [
                `You can divide each number in the ratio by ${ms[0]} to get ${qRatio.map(n => n / ms[0]).join(':')} but then you can simplify further.`,
                `The HCF(${qRatio.join(',')}) is ${m}`,
            ],
            buildingBlocks: [],
            qFeedback: `If you divide each number in ${qRatio.join(':')} by ${m} you get ${ratio.join(':')}`
        }
    }
}

const simplifyQ = (qName, ratio, m, ms) => {
    if (selector[qName] === undefined) {
        return { q: 'default simplify Q' }
    }
    return selector[qName](ratio, m, ms)
}

// apart from 7 itself, these numbers have only 2, 3, 5 as prime factors (and not too high)
const multipliers = [
    [2], [3], [5], [7],
    [2, 2], [2, 3], [2, 2, 2], [3, 3], [2, 5], [2, 2, 3],
    [3, 5], [2, 3, 3], [2, 2, 5], [2, 2, 2, 3], [5, 5], [2, 3, 5]
];
const simplifySetup = (qName) => {
    if (qName === 'withUnits') { return simplifyWithUnits() }
    const r = rFuncs.randomInt(2) === 0 ? rFuncs.randomCoprimePair() : rFuncs.randomCoprimeTriple()
    const ms = qName === 'noUnits1' ? rFuncs.randomElement(multipliers.slice(0, 4)) : rFuncs.randomElement(multipliers.slice(4))
    const m = ms.reduce((acc, v) => acc * v, 1)
    return simplifyQ(qName, r, m, ms)
}

module.exports = {
    sectionName: 'simplify',
    qGetter: simplifySetup
}