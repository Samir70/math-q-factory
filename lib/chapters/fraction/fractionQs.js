const { fractionSectionList } = require('./fractionSectionList');

const defaultQ = { q: 'default fraction-- Q', a: 42 }

const fractionQs = (section = '', qName = '') => {
    if (fractionSectionList[section] === undefined) { return defaultQ }
    let question = fractionSectionList[section].qGetter(qName);
    return question
}

module.exports = {
    chapterName: 'fraction',
    qGetter: fractionQs
}