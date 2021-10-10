const { dataSections } = require('./dataSectionsList');
const { findQGetter } = require('../../findQGetter');

const defaultQ = { q: 'default data Q', a: 42 }

dataQs = (section = '', qName = '') => {
    let qGetter = findQGetter('sectionName', section, dataSections);
    if (qGetter === -1) { return defaultQ }
    let question = qGetter(qName);
    return question
}

module.exports = {
    chapterName: 'data',
    qGetter: dataQs
}