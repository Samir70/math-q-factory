const { numberTheorySectionList } = require('./numberTheorySectionList');

const defaultQ = { q: 'default number Theory Q', a: 42 }

const numberTheoryQs = (section = '', qName = '') => {
    if (numberTheorySectionList[section] === undefined) { return defaultQ }
    let question = numberTheorySectionList[section].qGetter(qName);
    return question
}

module.exports = {
    chapterName: 'numberTheory',
    qGetter: numberTheoryQs
}