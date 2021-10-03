const { topics } = require('./Topics/topicList');
const { algebra01Qs } = require('./Topics/algebra01/algebra01Qs')
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
    let question = {};
    switch (topic) {
        case topics.algebra01: {
            // console.log(algebra01)
            question = algebra01Qs(subTopic, qTopic);
            break
        }
        default: {
            question = defaultQ
        }
    }
    return question
}

module.exports = { getMathsQs }