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

const sectionSetup = (qName) => {
    if (selector[qName] === undefined) {
        return { q: 'Default wordy-findTotal- Q' }
    }
    return selector[qName]()
}

module.exports = {
    sectionName: 'findTotal',
    qGetter: sectionSetup
}