const { sequenceSections } = require('./sequenceSectionList');

// Update below line and uncomment
const defaultQ = { q: 'default sequence Q', a: 42 }

// give a name to this function eg: for chapter data, use dataQs
// upddate the sequenceSections variable name to match what you imported above
const sequenceQs = (section = '', qName = '') => {
    if (sequenceSections[section] === undefined) { return defaultQ }
    let question = sequenceSections[section].qGetter(qName);
    return question
}

// update below and uncomment
// remember to register the chapterName in the 
// -- qPathList.js file (to enable tests and tell users it is available) and 
// -- chapterList.js file (so the program can find the path)
module.exports = {
    chapterName: 'sequences',
    qGetter: sequenceQs
}