const { proportionSectionList } = require('./proportionSectionList');

const defaultQ = { q: 'default proportion Q', a: 42 }

const proportionQs = (section = '', qName = '') => {
    if (proportionSectionList[section] === undefined) { return defaultQ }
    let question = proportionSectionList[section].qGetter(qName);
    return question
}

module.exports = {
    chapterName: 'proportion',
    qGetter: proportionQs
}