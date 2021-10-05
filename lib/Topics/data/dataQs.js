// const subTopics = [
//     null, 'mean', 'meanFindmissing', 'medianOdd', 'medianEven', 'range', 'mode'
// ];
const { dataSections } = require('./dataSectionsList');

const defaultQ = { q: 'default data Q', a: 42 }

dataQs = (subtopic = '', qTopic = '') => {
    let foundSub = false;
    let question = {}
    for (let section of dataSections) {
        if (section.topic === subtopic) {
            foundSub = true;
            question = section.qGetter(qTopic)
            break
        }
    }
    return foundSub ? question : defaultQ
}

module.exports = {
    topic: 'data',
    qGetter: dataQs
}