const rFuncs = require('../../nonQ/randFuncs');

const selector = {
    'loavesToFlour': () => {
        return {
            q: 'Default chapter-section-qName1 question',
            a: 42,
        }
    },
    'flourToBags': () => {
        return {
            q: 'Default chapter-section-qName2 question',
            a: 42,
        }
    },
    'meanNoBags': () => {
        return {
            q: 'Default chapter-section-qName3 question',
            a: 42,
        }
    }
}

const sectionSetup = (qName) => {
    if (selector[qName] === undefined) {
        return { q: 'Default examQ-bakery- Q' }
    }
    return selector[qName]()
}

module.exports = {
    sectionName: 'bakeryQ',
    qGetter: sectionSetup
}