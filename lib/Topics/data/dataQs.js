// const sections = [
//     null, 'mean', 'meanFindmissing', 'medianOdd', 'medianEven', 'range', 'mode'
// ];
const { dataSections } = require('./dataSectionsList');

const defaultQ = { q: 'default data Q', a: 42 }

dataQs = (section = '', qName = '') => {
    let foundSub = false;
    let question = {}
    for (let sec of dataSections) {
        if (sec.sectionName === section) {
            foundSub = true;
            question = sec.qGetter(qName)
            break
        }
    }
    return foundSub ? question : defaultQ
}

module.exports = {
    chapterName: 'data',
    qGetter: dataQs
}