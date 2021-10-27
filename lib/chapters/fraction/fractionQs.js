const { fractionSectionList } = require('./fractionSectionList');

const defaultQ = { q: 'default fraction-- Q', a: 42 }

const fractionQs = (section = '', qName = '') => {
    // let qGetter = findQGetter('sectionName', section, fractionSectionList);
    // if (qGetter === -1) { return defaultQ }
    // let question = qGetter(qName);
    return defaultQ
}

module.exports = {
    chapterName: 'fraction',
    qGetter: fractionQs
}