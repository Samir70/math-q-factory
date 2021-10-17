const rFuncs = require('../../nonQ/randFuncs');

// for topic mean rename as meanQ
// this function should be pure, containing no randomly set variables
const shareQs = {

}

// for share mean rename as meanSetup
// this will pick all random choices and then pass those to the shareQ function
const shareSetup = (qName) => {
    if (shareQs[qName] === undefined) {
        return {q: 'Default ratio-share- Q'}
    }
}

// this needs to be imported into a sectionList file
// eg: mean would be part of the dataSectionList
module.exports = {
    sectionName: 'share',
    qGetter: shareSetup
}