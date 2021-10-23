const rFuncs = require('../../nonQ/randFuncs');

const selector = {
    sameDenom: () => {
        return {
            q: 'Default fraction-compare-sameDenom question',
            a: 42,
        }
    },
    sameNumer: () => {
        return {
            q: 'Default fraction-compare-sameNumer question',
            a: 42,
        }
    },
    noMatch: () => {
        return {
            q: 'Default fraction-compare-noMatch question',
            a: 42,
        }
    }
}

const compareSetup = (qName) => {
    if (selector[qName] === undefined) {
        return { q: 'Default fraction-compare- Q' }
    }
    return selector[qName]()
}

module.exports = {
    sectionName: 'compare',
    qGetter: compareSetup
}