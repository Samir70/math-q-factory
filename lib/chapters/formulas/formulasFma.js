const rFuncs = require('../../nonQ/randFuncs');

// qPathList expects: 
// formulas: ['fah2Cent-120', 'cent2Fah-120', 'f=ma-90', 'f=maFindm-100', 'f=maFinda-100'],
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

// set up the randomly set variables here and pass them as arguments to above functions
// if the above are using very different sets of variables, 
// then maybe they need to be split into different sections
const sectionSetup = (qName) => {
    if (selector[qName] === undefined) {
        return { q: 'Default formulas-F=ma Q' }
    }
    return selector[qName]()
}

module.exports = {
    sectionName: 'F=ma',
    qGetter: sectionSetup
}