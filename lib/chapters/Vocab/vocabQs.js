const { vocabSections } = require('./vocabSectionList');
const rFuncs = require('../../nonQ/randFuncs');

// const defaultQ = { q: 'default Vocab Q', a: 42 }

const vocabQs = (section = '', qName = '') => {
    if (vocabSections[section] === undefined) {
        section = rFuncs.randomElement(Object.keys(vocabSections))
    }
    let question = vocabSections[section].qGetter(qName);
    return question
}

module.exports = {
    chapterName: 'vocab',
    qGetter: vocabQs
}