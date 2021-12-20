const rFuncs = require('../../nonQ/randFuncs');

const selector = {
    qName1: () => {
        return {
            q: 'Default chapter-section-qName1 question',
            a: 42,
        }
    },
    qName2: () => {
        return {
            q: 'Default chapter-section-qName1 question',
            a: 42,
        }
    }
}

const substituteSetup = (qName) => {
    if (selector[qName] === undefined) {
        return { q: 'Default algebra01-substitute- Q' }
    }
    return selector[qName]()
}

module.exports = {
    sectionName: 'substitute',
    qGetter: substituteSetup
}