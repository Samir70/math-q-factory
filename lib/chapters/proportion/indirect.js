const rFuncs = require('../../nonQ/randFuncs');

const selector = {
    speedDistTime: () => {
        return {
            q: 'Default propor-indirect-sdt question',
            a: 42,
        }
    },
    chocolates: () => {
        return {
            q: 'Default propor-indirect-choc question',
            a: 42,
        }
    },
    painters: () => {
        return {
            q: 'Default propor-indirect-painters question',
            a: 42,
        }
    }
}

const sectionSetup = (qName) => {
    if (selector[qName] === undefined) {
        return { q: 'Default proportion-indirect- Q' }
    }
    return selector[qName]()
}

// this needs to be imported into a sectionList file
// eg: mean would be part of the dataSectionList
module.exports = {
    sectionName: 'indirect',
    qGetter: sectionSetup
}