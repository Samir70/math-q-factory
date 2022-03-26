const rFuncs = require('../../nonQ/randFuncs');
const { wrapMJax } = require('../../nonQ/formatFuncs');

const selector = {
    quarters: ({ denomThatIsFactor }) => {
        let numer = denomThatIsFactor % 2 ? 3 : 1
        let ans = denomThatIsFactor % 2 ? '75%' : '25%'
        let frac = wrapMJax(`${numer}/4`)
        return {
            q: `Convert ${frac} to a percentage`,
            a: ans,
            hints: [
                'Percent means per 100',
                `Can you convert ${frac} into something over 100?`,
                `What is ${frac} of 100?`
            ],
            buildingBlocks: [
                'fraction-ofAmount-manySlices-120',
                'fraction-simplify-composite-90'
            ],
            qFeedback: `${frac} = ${ans}`
        }
    },
    str8toOver100: ({ numerForDenomThatIsFactor, denomThatIsFactor }) => {
        let ans = numerForDenomThatIsFactor * 100 / denomThatIsFactor
        let frac = wrapMJax(`${numerForDenomThatIsFactor}/${denomThatIsFactor}`)
        return {
            q: `Convert ${frac} to a percentage`,
            a: ans + '%',
            hints: [
                'Percent means per 100',
                `Can you convert ${frac} into something over 100?`,
                `Multiply top and bottom of ${frac} by ${100 / denomThatIsFactor}`
            ],
            buildingBlocks: [
                'fraction-toPercentage-quarters-50'
            ],
            qFeedback: `${frac} = ${ans}%`
        }
    },
    simplifyThenToOver100: () => {
        return {
            q: 'Default simplifyThenToOver100 question',
            a: 42,
        }
    },
    viaDivision: () => {
        return {
            q: 'Default viaDivision question',
            a: 42,
        }
    }
}

const usefulDenoms = [
    // don't use multiples like 13 (except 52), 17, 19, 23
    { factorOf100: 4, multiplesOfFactor: [8, 12, 16, 24, 28, 32, 36, 44, 48, 52, 56, 64, 72, 84, 88, 96] },
    { factorOf100: 5, multiplesOfFactor: [15, 35, 45, 55] },
    { factorOf100: 10, multiplesOfFactor: [30, 70, 90] },
    { factorOf100: 20, multiplesOfFactor: [40, 60, 80] },
    { factorOf100: 25, multiplesOfFactor: [75] }
]

const sectionSetup = (qName) => {
    if (selector[qName] === undefined) {
        return { q: 'Default fraction-toPercentage- Q' }
    }
    let choice = rFuncs.randomElement(usefulDenoms);
    let denomThatIsFactor = choice.factorOf100, nonFactorDenom = rFuncs.randomElement(choice.multiplesOfFactor);
    let numerForDenomThatIsFactor = rFuncs.randomInt(denomThatIsFactor - 1) + 1
    let numberForOtherDenom = numerForDenomThatIsFactor * nonFactorDenom / denomThatIsFactor
    // console.log({
    //     simple: numerForDenomThatIsFactor + '/' + denomThatIsFactor,
    //     nonSimple: numberForOtherDenom + '/' + nonFactorDenom
    // })
    return {
        qType: 'shortAnswer',
        ...selector[qName]({ denomThatIsFactor, nonFactorDenom, numerForDenomThatIsFactor, numberForOtherDenom })
    }
}

module.exports = {
    sectionName: 'toPercentage',
    qGetter: sectionSetup
}