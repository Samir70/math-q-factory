const rFuncs = require('../../nonQ/randFuncs');

// As always: comments can be removed once the default Qs are accessable

// I quite like this format for chapter-section-qName paths with lots of qNames
// There's potential for the selector to import its functions
// you can rename the selector, but then you would have to rename it below also.
// Try to keep these functions pure.
// For reference: see how it works in the ratioShare.js file
const selector = {
    qName1: () => {
        return {
            q: 'Default chapter-section-qName1 question',
            a: 42,
        }
    },
    qName2: () => {
        return {
            q: 'Default chapter-section-qName1 question',
            a: 42,
        }
    }
}

// set up the randomly set variables here and pass them as arguments to above functions
// if the above are using very different sets of variables, 
// then maybe they need to be split into different sections
const orderSetup = (qName) => {
    if (selector[qName] === undefined) {
        return { q: 'Default decimal-order- Q' }
    }
    return selector[qName]()
}

module.exports = {
    sectionName: 'order',
    qGetter: orderSetup
}