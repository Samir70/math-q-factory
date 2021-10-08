const { topicsToTest } = require('./qPathList');
const { chapters } = require('./Topics/chapterList');
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
    let foundChapter = false;
    let question = {}
    for (let chap of chapters) {
        if (chap.chapterName === chapter) {
            foundChapter = true;
            question = chap.qGetter(section, qName)
            break
        }
    }
    question.qPath = [chapter, section, qName].join('-')
    return foundChapter ? question : defaultQ
}

module.exports = { getMathsQs, topicsToTest }