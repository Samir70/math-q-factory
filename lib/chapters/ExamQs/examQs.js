const { examQsSectionList } = require('./examQsSectionList');

const defaultQ = { q: 'default examQ question', a: 42 }

const examQs = (section = '', qName = '') => {
    if (examQsSectionList[section] === undefined) { return defaultQ }
    let question = examQsSectionList[section].qGetter(qName);
    return question
}

module.exports = {
    chapterName: 'examQs',
    qGetter: examQs
}