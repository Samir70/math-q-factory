const rFuncs = require('../../nonQ/randFuncs');

const selector = {
    qName1: () => {
        return {
            q: 'Default algebra01-solveLinear-qName1 question',
            a: 42,
        }
    },
    qName2: () => {
        return {
            q: 'Default algebra01-solveLinear-qName1 question',
            a: 42,
        }
    }
}

const solveLinearSetup = (qName) => {
    if (selector[qName] === undefined) {
        return { q: 'Default algebra01-solveLinear- Q' }
    }
    return selector[qName]()
}

module.exports = {
    sectionName: 'solveLinear',
    qGetter: solveLinearSetup
}