const { vocabSections } = require('./vocabSectionList');

const defaultQ = { q: 'default Vocab Q', a: 42 }

const vocabQs = (section = '', qName = '') => {
    if (vocabSections[section] === undefined) { return defaultQ }
    let question = vocabSections[section].qGetter(qName);
    return question
}

module.exports = {
    chapterName: 'vocab',
    qGetter: vocabQs
}