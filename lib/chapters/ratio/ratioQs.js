const { ratioSections } = require('./ratioSectionList');
const { findQGetter } = require('../../findQGetter');

const defaultQ = { q: 'default ratio Q', a: 42 }

const ratioQs = (section = '', qName = '', level = 0) => {
    let qGetter = findQGetter('sectionName', section, ratioSections);
    if (qGetter === -1) { return defaultQ }
    let question = qGetter(qName, level);
    return question
}

module.exports = {
    chapterName: 'ratio',
    qGetter: ratioQs
}