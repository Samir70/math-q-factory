const rFuncs = require('../../nonQ/randFuncs');
const { joinList } = require('../../nonQ/formatFuncs');
const { wrapMJax } = require('../../nonQ/formatFuncs');
const { colours } = require('../../nonQ/lists');

const selector = {
    ratio2Frac: (side, ratio, frac, colours) => {
        let fracText = wrapMJax(frac.join('/'));
        return {
            q: `A jar has ${joinList(colours)} beads in the ratio ${ratio.join(':')} \nWhat fraction of the beads are ${colours[side]}?`,
            a: fracText,
            hints: [`If there are ${ratio[0]} ${colours[0]} beads and ${ratio[1]} ${colours[1]} beads, then how many beads are there in total?`],
            qFeedback: `${fracText} of the beads are ${colours[side]}`,
            buildingBlocks: []
        }
    },
    frac2Ratio: (side, ratio, frac, colours) => {
        let fracText = wrapMJax(frac.join('/'));
        return {
            q: `${fracText} of the beads in a jar are ${colours[side]}, the rest are ${colours[side ^ 1]}. \nWhat is the ratio of ${colours.join(' to ')} beads?`,
            a: ratio.join(':'),
            hints: [`If ${frac[0]} out of ${frac[1]} of the beads are ${colours[side]}, how many are not?`],
            qFeedback: `The ratio of ${colours.join(' to ')} beads is ${ratio.join(':')}`,
            buildingBlocks: []
        }
    }
}

const sectionSetup = (qName) => {
    if (selector[qName] === undefined) {
        return { q: 'Default ratio-fractions Q' }
    }
    let side = rFuncs.randomInt(2)
    let ratio = rFuncs.randomCoprimePair(true)
    let frac = [ratio[side], ratio[0] + ratio[1]]
    let colours = rFuncs.randomColours(2)
    return {
        qType: 'shortAnswer',
        ...selector[qName](side, ratio, frac, colours)
    }
}

module.exports = {
    sectionName: 'fractions',
    qGetter: sectionSetup
}