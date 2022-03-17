const rFuncs = require('../../nonQ/randFuncs');

const selector = {
    ordinary: () => {
        return {
            q: 'Default fracMult Ordinary question',
            a: 42,
        }
    },
    mixedNumbers: () => {
        return {
            q: 'Default fracMultMixed question',
            a: 42,
        }
    }
}

const sectionSetup = (qName) => {
    if (selector[qName] === undefined) {
        return { q: 'Default fraction-multiply- Q' }
    }
    return selector[qName]()
}

module.exports = {
    sectionName: 'multiply',
    qGetter: sectionSetup
}