const { wordySections } = require('./wordySectionList');

const defaultQ = { q: 'default wordy Q', a: 42 }

const wordyQs = (section = '', qName = '') => {
    if (wordySections[section] === undefined) { return defaultQ }
    let question = wordySections[section].qGetter(qName);
    return question
}

module.exports = {
    chapterName: 'wordy',
    qGetter: wordyQs
}