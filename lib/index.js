const { topicsToTest } = require('./qPathList');
const { findQGetter } = require('./findQGetter');
const { chapters } = require('./chapters/chapterList');
const defaultQ = {
    q: "What is the answer to the ultimate question of life, the universe and everything",
    a: 42
}

/**
 * Questions are specified by three arguments, eg: Algebra, linearEqs, 2step
 * I may add a level argument, too
 * @param {string} chapter 
 * @param {string} section 
 * @param {string} qName 
 * @returns An object with at least q and a properties
 */
const getMathsQs = (chapter = '', section = '', qName = '') => {
    let qGetter = findQGetter('chapterName', chapter, chapters);
    if (qGetter === -1) { return defaultQ }
    let question = qGetter(section, qName);
    question.qPath = [chapter, section, qName].join('-');
    return question
}

module.exports = { getMathsQs, topicsToTest }