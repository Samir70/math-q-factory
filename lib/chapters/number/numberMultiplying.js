const rFuncs = require('../../nonQ/randFuncs');

// for topic mean rename as meanQ
// this function should be pure, containing no randomly set variables
const multiplyingQ = (list) => {
    return {q: 'default multiplying Q'}
}

// for topic mean rename as meanSetup
// this will pick all random choices and then pass those to the topicQ function
const multiplyingSetup = () => {
    return multiplyingQ()
}

// this needs to be imported into a sectionList file
// eg: mean would be part of the dataSectionList
module.exports = {
    sectionName: 'multiplying',
    qGetter: multiplyingSetup
}