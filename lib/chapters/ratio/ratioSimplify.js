const rFuncs = require('../../nonQ/randFuncs');

const simplifyQ = (list) => {
    return {q:'default simplify Q'}
}

const simplifySetup = () => {
    return simplifyQ()
}

module.exports = {
    sectionName: 'simplify',
    qGetter: simplifySetup
}