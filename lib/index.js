const { topicsToTest, shortAnswerPaths, totalQs } = require('./qPathList');
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
const getMathsQs = (chapter = '', section = '', qName = '', rating=0) => {
    if (chapters[chapter] === undefined) { return defaultQ }
    let question = chapters[chapter].qGetter(section, qName);
    question.qPath = [chapter, section, qName].join('-');
    if (rating > 0) {question.qPath += `-${rating}`}
    return question
}

module.exports = { getMathsQs, topicsToTest, shortAnswerPaths, totalQs }