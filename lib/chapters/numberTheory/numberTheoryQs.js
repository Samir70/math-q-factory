const { numberTheorySectionList } = require('./numberTheorySectionList');
const { findQGetter } = require('../../findQGetter');

const numberTheoryQs = (section = '', qName = '') => {
    let qGetter = findQGetter('sectionName', section, numberTheorySectionList);
    if (qGetter === -1) { return defaultQ }
    let question = qGetter(qName);
    return question
}

module.exports = {
    chapterName: 'numberTheory',
    qGetter: numberTheoryQs
}