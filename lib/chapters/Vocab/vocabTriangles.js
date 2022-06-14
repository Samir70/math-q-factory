const rFuncs = require('../../nonQ/randFuncs');

const words = ['right-angled', 'scalene', 'isosceles', 'equilateral'];
const defs = {
    "right-angled": {
        q: "Pythagoras's formula is meant for what type of triangle?",
        fb: "Pythagoras's formula is used with right-angled triangles"
    },
    scalene: {
        q: 'What do you call a triangle with three different sides?',
        fb: 'A scalene triangle has three different sides'
    },
    isosceles: {
        q: 'What do you call a triangle with two equal sides?',
        fb: 'An isosceles triangle has two equal sides (and two equal angles)',
    },
    equilateral: {
        q: 'What do you call a triangle with all sides the same length?',
        fb: 'An equilateral triangle has all three sides the same length',
    }
}

const setup = (qName) => {
    if (defs[qName] === undefined) {
        qName = rFuncs.randomElement(words)
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
        qFeedback: defs[qName].fb,
        buildingBlocks: []
    }
    return out
}

module.exports = {
    sectionName: 'triangles',
    qGetter: setup
}
