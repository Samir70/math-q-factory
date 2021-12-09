const { algebraSections } = require('./algebraSectionList');

const defaultQ = { q: 'default algebra01 Q', a: 42 }

const algebraQs = (section = '', qName = '') => {
    if (algebraSections[section] === undefined) { return defaultQ }
    let question = algebraSections[section].qGetter(qName);
    return question
}

module.exports = {
    chapterName: 'algebra01',
    qGetter: algebraQs
}