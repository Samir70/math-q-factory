const { numberSections } = require('./numberSectionList');
const { findQGetter } = require('../../findQGetter');

const defaultQ = { q: 'default numbers Q', a: 42 }

const numberQs = (section = '', qName = '') => {
    let qGetter = findQGetter('sectionName', section, numberSections);
    if (qGetter === -1) { return defaultQ }
    let question = qGetter(qName);
    return question
}

module.exports = {
    chapterName: 'number',
    qGetter: numberQs
}