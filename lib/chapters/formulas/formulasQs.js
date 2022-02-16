const { formulasSections } = require('./formulasSectionList');

const defaultQ = { q: 'default formulas Q', a: 42 }

const formulasQs = (section = '', qName = '') => {
    if (formulasSections[section] === undefined) { return defaultQ }
    let question = formulasSections[section].qGetter(qName);
    return question
}

module.exports = {
    chapterName: 'formulas',
    qGetter: formulasQs
}