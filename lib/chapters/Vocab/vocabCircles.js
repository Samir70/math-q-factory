const rFuncs = require('../../nonQ/randFuncs');

// { q: 'A chord cuts a circle into two ...?', a: 'segments' },
// { q: 'Two radii (radiuses) cut out a piece like a slice of pie, called a ...?', a: 'sector' }
const words = ['diameter', 'radius', 'tangent', 'chord'];
const defs = {
    diameter: {
        q: 'What do you call a line that goes across a circle, through the centre?',
        fb: 'The diameter goes across a circle, through the centre.'
    },
    radius: {
        q: 'What do you call a line from the centre of a circle to the edge of the circle?',
        fb: 'The radius goes from the centre of a circle to the edge.'
    },
    tangent: {
        q: 'What do you call a line that just touches the outside of a circle?',
        fb: 'The tangent just touches the outside of a circle.'
    },
    chord: {
        q: 'What do you call a line that cuts across a circle, but not necessarily through the centre?',
        fb: 'A chord cuts across a circle, but not necessarily through the centre'
    },
}


const circlesSetup = (qName) => {
    if (defs[qName] === undefined) {
        return { q: 'Default vocab-circles- Q' }
    }
    const wrongOptions = words.filter(w => w !== qName)
    let out = {
        qType: 'multiChoice',
        q: defs[qName].q,
        a: qName, wrongOptions,
        hint: defs[wrongOptions[0]].fb, 
        giveAway: defs[wrongOptions[1]].fb, 
        qFeedback: defs[qName].fb
    }
    return out
}

module.exports = {
    sectionName: 'circles',
    qGetter: circlesSetup
}