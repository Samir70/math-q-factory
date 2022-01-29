const { shapeSections } = require('./shapeSectionList');

const defaultQ = { q: 'default shape Q', a: 42 }

const shapeQs = (section = '', qName = '') => {
    if (shapeSections[section] === undefined) { return defaultQ }
    let question = shapeSections[section].qGetter(qName);
    return question
}

module.exports = {
    chapterName: 'shape',
    qGetter: shapeQs
}