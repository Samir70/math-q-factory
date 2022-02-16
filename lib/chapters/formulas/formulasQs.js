/**
 * This is boilerplate for a new chapter.
 * Take a look at lib/topics/data/dataQs.js for an example of how it is used.
 * Once it is working, you can delete the comments
 * variables in ALLCAPS need to be changed
 */

// import the sections that this chapter has.
// NB remember to import the formulasSections into the chapSecStructure.test.js file too
const { formulasSections } = require('./formulasSectionList');

// Update below line and uncomment
const defaultQ = { q: 'default formulas Q', a: 42 }

// give a name to this function eg: for chapter data, use dataQs
// upddate the formulasSections variable name to match what you imported above
const formulasQs = (section = '', qName = '') => {
    if (formulasSections[section] === undefined) { return defaultQ }
    let question = formulasSections[section].qGetter(qName);
    return question
}

// update below and uncomment
// remember to register the chapterName in the 
// -- qPathList.js file (to enable tests and tell users it is available) and 
// -- chapterList.js file (so the program can find the path)
module.exports = {
    chapterName: 'formulas',
    qGetter: formulasQs
}