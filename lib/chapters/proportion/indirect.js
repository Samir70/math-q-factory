const rFuncs = require('../../nonQ/randFuncs');

const selector = {
    speedDistTime: (a, b, c) => {
        return {
            q: `Travelling at ${a}kph a journey takes ${b * c} minutes. \nHow many minutes would it take travelling at ${b}kph?`,
            hints: ['What distance is the journey?'],
            buildingBlocks: [],
            qFeedback: `The journey would take ${a * c} minutes`
        }
    },
    chocolates: (a, b, c) => {
        return {
            q: `If chocolates are shared among ${a} people, they get ${b * c} each. \nHow many would each get if the same chocolates were shared among ${b} people?`,
            hints: ['How many chocolates are being shared?'],
            buildingBlocks: [],
            qFeedback: `${b} people would get ${a * c} chocolates each`
        }
    },
    painters: (a, b, c) => {
        return {
            q: `${a} painters can paint a bridge in ${b * c} days. \nHow long would it take ${b} painters?`,
            hints: ['Should more painters take longer? Or should they be quicker?'],
            buildingBlocks: ['proportion-indirect-chocolates-210'],
            qFeedback: `${b} painters would paint the bridge in ${a * c} days`
        }
    }
}

const sectionSetup = (qName) => {
    if (selector[qName] === undefined) {
        return { q: 'Default proportion-indirect- Q' }
    }
    // pick 3 factors so that abc = t
    // expose a and bc, give b and require ac
    let [a, b, c] = [2, 2, 10].map(x => x + rFuncs.randomInt(4))
    if (a === b) { b++ }
    return {
        ...selector[qName](a, b, c), a: a * c,
        qType: 'shortAnswer'
    }
}

// this needs to be imported into a sectionList file
// eg: mean would be part of the dataSectionList
module.exports = {
    sectionName: 'indirect',
    qGetter: sectionSetup
}