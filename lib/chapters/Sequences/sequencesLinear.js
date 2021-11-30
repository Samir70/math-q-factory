const rFuncs = require('../../nonQ/randFuncs');

// As always: comments can be removed once the default Qs are accessable

// I quite like this format for sequences-linear-qName paths with lots of qNames
// There's potential for the selector to import its functions
// you can rename the selector, but then you would have to rename it below also.
// Try to keep these functions pure.
// For reference: see how it works in the ratioShare.js file
const selector = {
    findNextTerm: ({ first6 }) => {
        return {
            q: `Find the next term in ${first6.slice(0, 5)}`,
            a: first6[5],
        }
    },
    qName2: () => {
        return {
            q: 'Default sequences-linear-qName1 question',
            a: 42,
        }
    }
}

// set up the randomly set variables here and pass them as arguments to above functions
// if the above are using very different sets of variables, 
// then maybe they need to be split into different sections
const linearSetup = (qName) => {
    if (selector[qName] === undefined) {
        return { q: 'Default sequences-linear- Q' }
    }
    let diff = rFuncs.randomInt(10) + 3, prior = rFuncs.randomInt(16) + 7;
    diff *= rFuncs.randomInt(3) === 0 ? -1 : 1
    let first6 = [1, 2, 3, 4, 5, 6].map(n => prior + n * diff)
    let nthTerm = diff < 0 ? `${prior} - ${Math.abs(diff)}n` : `${diff}n + ${prior}`
    return selector[qName]({ diff, prior, first6, nthTerm })
}

module.exports = {
    sectionName: 'linear',
    qGetter: linearSetup
}