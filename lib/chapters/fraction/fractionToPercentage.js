const rFuncs = require('../../nonQ/randFuncs');

const selector = {
    str8toOver100: () => {
        return {
            q: 'Default str8toOver100 question',
            a: 42,
        }
    },
    simplifyThenToOver100: () => {
        return {
            q: 'Default simplifyThenToOver100 question',
            a: 42,
        }
    },
    viaDivision: () => {
        return {
            q: 'Default viaDivision question',
            a: 42,
        }
    }
}

const sectionSetup = (qName) => {
    if (selector[qName] === undefined) {
        return { q: 'Default fraction-toPercentage- Q' }
    }
    return selector[qName]()
}

module.exports = {
    sectionName: 'toPercentage',
    qGetter: sectionSetup
}