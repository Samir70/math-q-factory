const { chapters } = require('./Topics/chapterList');
const defaultQ = {
    q: "What is the answer to the ultimate question of life, the universe and everything",
    a: 42
}

/**
 * Questions are specified by three arguments, eg: Algebra, linearEqs, 2step
 * I may add a level argument, too
 * @param {string} topic 
 * @param {string} subTopic 
 * @param {string} qTopic 
 * @returns An object with at least q and a properties
 */
const getMathsQs = (topic = '', subTopic = '', qTopic = '') => {
    let foundTopic = false;
    let question = {}
    for (let chapter of chapters) {
        if (chapter.topic === topic) {
            foundTopic = true;
            question = chapter.qGetter(subTopic, qTopic)
        }
    }
    return foundTopic ? question : defaultQ
}

module.exports = { getMathsQs }