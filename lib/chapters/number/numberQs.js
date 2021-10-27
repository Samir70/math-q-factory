const { numberSections } = require('./numberSectionList');

const defaultQ = { q: 'default numbers Q', a: 42 }

const numberQs = (section = '', qName = '') => {
    if (numberSections[section] === undefined) { return defaultQ }
    let question = numberSections[section].qGetter(qName);
    return question
}

module.exports = {
    chapterName: 'number',
    qGetter: numberQs
}