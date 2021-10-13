/**
 * This is boilerplate for a new chapter.
 * Take a look at lib/topics/data/dataQs.js for an example of how it is used.
 * Once it is working, you can delete the comments
 * variables in ALLCAPS need to be changed
 */

// import the sections that this chapter has.
// NB remember to import the SECTION_LIST into the chapSecStructure.test.js file too
const { SECTION_LIST } = require();
const { findQGetter } = require('../../findQGetter');

// Update below line and uncomment
// const defaultQ = { q: 'default NAME_THE_TOPIC_HERE Q', a: 42 }

// give a name to this function eg: for chapter data, use dataQs
// upddate the SECTION_LIST variable name to match what you imported above
const CHANGENAME = (section = '', qName = '') => {
    let qGetter = findQGetter('sectionName', section, SECTION_LIST);
    if (qGetter === -1) { return defaultQ }
    let question = qGetter(qName);
    return question
}

// update below and uncomment
// remember to register the chapterName in the 
// -- qPathList.js file (to enable tests and tell users it is available) and 
// -- chapterList.js file (so the program can find the path)
module.exports = {
    // chapterName: 'USE_THE_CHAPTER_NAME_THAT_WILL_BE_PART_OF_PATH_TO_FINAL_Q',
    // qGetter: CHANGENAME
}