const { decimalSections } = require('./decimalSectionList');

const defaultQ = { q: 'default decimal Q', a: 42 }

const decimalQs = (section = '', qName = '') => {
    if (decimalSections[section] === undefined) { return defaultQ }
    let question = decimalSections[section].qGetter(qName);
    return question
}

module.exports = {
    chapterName: 'decimal',
    qGetter: decimalQs
}