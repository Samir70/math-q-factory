const { percentSections } = require('./percentSectionsList');

const defaultQ = { q: 'default percent Q', a: 42 }

const percentQs = (section = '', qName = '') => {
    if (percentSections[section] === undefined) { return defaultQ }
    let question = percentSections[section].qGetter(qName);
    return question
}

module.exports = {
    chapterName: 'percent',
    qGetter: percentQs
}