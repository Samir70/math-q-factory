const { numberSections } = require('./numberSectionList');

const defaultQ = { q: 'default numbers Q', a: 42 }

const numberQs = (section = '', qName = '') => {
    // let qGetter = findQGetter('sectionName', section, numberSections);
    // if (qGetter === -1) { return defaultQ }
    // let question = qGetter(qName);
    return defaultQ
}

module.exports = {
    chapterName: 'number',
    qGetter: numberQs
}