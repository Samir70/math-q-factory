const rFuncs = require('../../nonQ/randFuncs');

const selector = {
    acute: {
        qType: 'multiChoice', q: 'What do you call an angle that is less than 90 degrees?',
        a: 'acute', wrongOptions: ['obtuse', 'reflex', 'right'],
        hint: 'A reflex angle is more than 180 degrees',
        giveAway: 'A right angle is exactly 90 degrees',
        qFeedback: 'An acute angle is one which is less than 90 degrees'
    },
    obtuse: {
        qType: 'multiChoice', q: 'What do you call an angle that is more than 90 and less than 180 degrees?',
        a: 'obtuse', wrongOptions: ['acute', 'reflex', 'right'],
        hint: 'A reflex angle is more than 180 degrees',
        giveAway: 'A right angle is exactly 90 degrees',
        qFeedback: 'An obtuse angle is one which is between 90 and 180 degrees'
    },
    reflex: {
        qType: 'multiChoice', q: 'What do you call an angle that is more than 180 degrees?',
        a: 'reflex', wrongOptions: ['acute', 'obtuse', 'right'],
        qFeedback: 'A reflex angle is more than 180 degrees',
        giveAway: 'A right angle is exactly 90 degrees',
        hint: 'An obtuse angle is one which is between 90 and 180 degrees'
    },
    right: {
        qType: 'multiChoice', q: 'What do you call an angle that is exactly 90 degrees?',
        a: 'right', wrongOptions: ['acute', 'reflex', 'obtuse'],
        hint: 'A reflex angle is more than 180 degrees',
        qFeedback: 'A right angle is exactly 90 degrees',
        giveAway: 'An obtuse angle is one which is between 90 and 180 degrees'
    }
}

const anglesSetup = (qName) => {
    if (selector[qName] === undefined) {
        qName = rFuncs.randomElement(Object.keys(selector))
    }
    return selector[qName]
}

module.exports = {
    sectionName: 'angles',
    qGetter: anglesSetup
}