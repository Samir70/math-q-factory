const { numberTheorySectionList } = require('./numberTheorySectionList');

const defaultQ = { q: 'default number Theory Q', a: 42 }

const numberTheoryQs = (section = '', qName = '') => {
    // let qGetter = findQGetter('sectionName', section, numberTheorySectionList);
    // if (qGetter === -1) { return defaultQ }
    // let question = qGetter(qName);
    return defaultQ
}

module.exports = {
    chapterName: 'numberTheory',
    qGetter: numberTheoryQs
}