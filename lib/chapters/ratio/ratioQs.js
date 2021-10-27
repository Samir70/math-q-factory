const { ratioSections } = require('./ratioSectionList');

const defaultQ = { q: 'default ratio Q', a: 42 }

const ratioQs = (section = '', qName = '') => {
    if (ratioSections[section] === undefined) { return defaultQ }
    let question = ratioSections[section].qGetter(qName);
    return question
}

module.exports = {
    chapterName: 'ratio',
    qGetter: ratioQs
}