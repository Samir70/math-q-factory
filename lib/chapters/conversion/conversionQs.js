const { conversionSections } = require('./conversionSectionList');

const defaultQ = { q: 'default conversion Q', a: 42 }

const conversionQs = (section = '', qName = '') => {
    if (conversionSections[section] === undefined) { return defaultQ }
    let question = conversionSections[section].qGetter(qName);
    return question
}

module.exports = {
    chapterName: 'conversion',
    qGetter: conversionQs
}
