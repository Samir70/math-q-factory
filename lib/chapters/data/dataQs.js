const { dataSections } = require('./dataSectionsList');

const defaultQ = { q: 'default data Q', a: 42 }

const dataQs = (section = '', qName = '') => {
    if (dataSections[section] === undefined) { return defaultQ }
    let question = dataSections[section].qGetter(qName);
    return question
}

module.exports = {
    chapterName: 'data',
    qGetter: dataQs
}