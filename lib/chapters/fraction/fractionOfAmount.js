const rFuncs = require('../../nonQ/randFuncs');

const selector = {
    oneSlice: () => {
        return {
            q: 'Default fraction-ofAmount-oneSlice question',
            a: 42,
        }
    },
    manySlices: () => {
        return {
            q: 'Default fraction-ofAmount-manySlices question',
            a: 42,
        }
    }
}

const fracOfAmountSetup = (qName) => {
    if (selector[qName] === undefined) {
        return { q: 'Default fraction-ofAmount- Q' }
    }
    return selector[qName]()
}

module.exports = {
    sectionName: 'ofAmount',
    qGetter: fracOfAmountSetup
}