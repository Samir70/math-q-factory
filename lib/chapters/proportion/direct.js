const rFuncs = require('../../nonQ/randFuncs');

const selector = {
    'one2many': () => {
        return {
            q: 'Default one2many question',
            a: 42,
        }
    },
    'many2many(multiple)': () => {
        return {
            q: 'Default many2many(multiple) question',
            a: 42,
        }
    },
    'many2many': () => {
        return {
            q: 'Default many2many question',
            a: 42,
        }
    }
}

const sectionSetup = (qName) => {
    if (selector[qName] === undefined) {
        return { q: 'Default proportion-direct- Q' }
    }
    return selector[qName]()
}

module.exports = {
    sectionName: 'direct',
    qGetter: sectionSetup
}