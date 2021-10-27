const { ratioSections } = require('./ratioSectionList');

const defaultQ = { q: 'default ratio Q', a: 42 }

const ratioQs = (section = '', qName = '') => {
    // let qGetter = findQGetter('sectionName', section, ratioSections);
    // if (qGetter === -1) { return defaultQ }
    // let question = qGetter(qName);
    return defaultQ
}

module.exports = {
    chapterName: 'ratio',
    qGetter: ratioQs
}