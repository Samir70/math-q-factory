const subTopics = [
    null, 'mean', 'meanFindmissing', 'medianOdd', 'medianEven', 'range', 'mode'
];

dataQs = (subtopic = '', qTopic = '') => {
    return {q: 'default data Q', a: 42}
}

module.exports = {
    topic: 'data',
    qGetter: dataQs
}