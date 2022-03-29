const rFuncs = require('../../nonQ/randFuncs');

// As always: comments can be removed once the default Qs are accessable

// I quite like this format for chapter-section-qName paths with lots of qNames
// There's potential for the selector to import its functions
// you can rename the selector, but then you would have to rename it below also.
// Try to keep these functions pure.
// For reference: see how it works in the ratioShare.js file
// ['a+bxc-80', 'axbtakec-80', 'ax(b+c)-80', 'atakeb+c-100'],
const selector = {
    'a+bxc': () => {
        return {
            q: 'Default a + bxc question',
            a: 42,
        }
    },
    'axbtakec': () => {
        return {
            q: 'Default axbtakec question',
            a: 42,
        }
    },
    'ax(b+c)': () => {
        return {
            q: 'Default ax(b+c) question',
            a: 42,
        }
    },
    'atakeb+c': () => {
        return {
            q: 'Default atakeb+c question',
            a: 42,
        }
    }
}

// set up the randomly set variables here and pass them as arguments to above functions
// if the above are using very different sets of variables, 
// then maybe they need to be split into different sections
const sectionSetup = (qName) => {
    if (selector[qName] === undefined) {
        return { q: 'Default number-bidmas- Q' }
    }
    return selector[qName]()
}

// this needs to be imported into a sectionList file
// eg: mean would be part of the dataSectionList
module.exports = {
    sectionName: 'bidmas',
    qGetter: sectionSetup
}