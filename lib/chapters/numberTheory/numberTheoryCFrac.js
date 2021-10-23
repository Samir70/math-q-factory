const rFuncs = require('../../nonQ/randFuncs');

const selector = {
    rational: () => {
        return {
            q: 'Default numberTheory-cFrac-rational question',
            a: 42,
        }
    },
    findConvergents: () => {
        return {
            q: 'Default numberTheory-cFrac-findConvergents question',
            a: 42,
        }
    }
}

const cFracSetup = (qName) => {
    if (selector[qName] === undefined) {
        return { q: 'Default numberTheory-cFrac- Q' }
    }
    return selector[qName]()
}

module.exports = {
    sectionName: 'cFrac',
    qGetter: cFracSetup
}