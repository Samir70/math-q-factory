const { powersSectionList } = require('./powersSectionList');

const defaultQ = { q: 'default powers Q', a: 42 }

const powersQs = (section = '', qName = '') => {
    if (powersSectionList[section] === undefined) { return defaultQ }
    let question = powersSectionList[section].qGetter(qName);
    return question
}

module.exports = {
    chapterName: 'powers',
    qGetter: powersQs
}