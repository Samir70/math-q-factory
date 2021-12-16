const rFuncs = require('../../nonQ/randFuncs');

const words = ['acute', 'obtuse', 'reflex', 'right'];
const defs = {
    acute: {
        q: 'What do you call an angle that is less than 90 degrees?',
        fb: 'An acute angle is one which is less than 90 degrees'
    },
    obtuse: {
        q: 'What do you call an angle that is more than 90 and less than 180 degrees?',
        fb: 'An obtuse angle is one which is between 90 and 180 degrees'
    },
    reflex: {
        q: 'What do you call an angle that is more than 180 degrees?',
        fb: 'A reflex angle is more than 180 degrees',
    },
    right: {
        q: 'What do you call an angle that is exactly 90 degrees?',
        fb: 'A right angle is exactly 90 degrees',
    }
}

const anglesSetup = (qName) => {
    if (defs[qName] === undefined) {
        return { q: 'Default vocab-circles- Q' }
    }
    const wrongOptions = words.filter(w => w !== qName)
    let out = {
        qType: 'multiChoice',
        q: defs[qName].q,
        a: qName, wrongOptions,
        hints: [
            defs[wrongOptions[0]].fb, 
            defs[wrongOptions[1]].fb, 
        ],
        qFeedback: defs[qName].fb
    }
    return out
}

module.exports = {
    sectionName: 'angles',
    qGetter: anglesSetup
}