const rFuncs = require('../../nonQ/randFuncs');

const topics = ['weeks', 'prize', 'meal', 'holiday' ]
const selector = {
    weeks: () => {
        return {
            q: 'Default weeks question',
            a: 42,
        }
    },
    prize: () => {
        return {
            q: 'Default prize question',
            a: 42,
        }
    },
    meal: () => {
        return {
            q: 'Default meal question',
            a: 42,
        }
    },
    holiday: () => {
        return {
            q: 'Default holiday question',
            a: 42,
        }
    }
}

const sectionSetup = (qName) => {
    if (selector[qName] === undefined) {
        qName = rFuncs.randomElement(topics)
    }
    return {
        buildingBlocks: ['number-busStop-noRemainder-150'],
        ...selector[qName]()
    }
}

module.exports = {
    sectionName: 'busStop',
    qGetter: sectionSetup
}