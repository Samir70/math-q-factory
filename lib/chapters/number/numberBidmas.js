const rFuncs = require('../../nonQ/randFuncs');
const { wrapMJax } = require('../../nonQ/formatFuncs');
const bidmasClue = 'This is about order of operations.'

const selector = {
    'a+bxc': (a, b, c) => {
        let expr = `${a} + ${b} x ${c}`
        return {
            q: `${expr} = ....`,
            a: a + b * c,
            hints: [bidmasClue, `You need to do ${b} x ${c} first`],
            qFeedback: `${expr} = ${a + b * c}`
        }
    },
    'axbtakec': (a, b, c) => {
        let expr = `${a} x ${b} - ${c}`
        return {
            q: `${expr} = ....`,
            a: a * b - c,
            hints: [bidmasClue, `You need to do ${a} x ${b} first`],
            qFeedback: `${expr} = ${a * b - c}`
        }
    },
    'ax(b+c)': (a, b, c) => {
        let expr = `${a} x (${b} + ${c})`
        return {
            q: `${expr} = ....`,
            a: a * (b + c),
            hints: [bidmasClue, `You need to work out the part in brackets first`],
            qFeedback: `${expr} = ${a * (b + c)}`
        }
    },
    'atakeb+c': (a, b, c) => {
        let expr = `${a} - ${b} + ${c}`
        return {
            q: `${expr} = ....`,
            a: a - b + c,
            hints: [bidmasClue, `Tricky one: adding and subtracting are done in the order written`],
            qFeedback: `${expr} = ${a - b + c}`
        }
    },
    'a^2takebxc': (a, b, c) => {
        let expr = wrapMJax(`${a}^2 - ${b} xx ${c}`)
        return {
            q: `${expr} = ....`,
            a: a * a - b * c,
            hints: [bidmasClue, `Do powers (indices) before multiplying`],
            qFeedback: `${expr} = ${a * a - b * c}`
        }
    },
    'a+(btakec)^2': (a, b, c) => {
        let expr = wrapMJax(`${a} + (${b} - ${c})^2`)
        return {
            q: `${expr} = ....`,
            a: a + (b - c) ** 2,
            hints: [bidmasClue, `You need to work out the part in brackets first`],
            qFeedback: `${expr} = ${a + (b - c) ** 2}`
        }
    }
}

const sectionSetup = (qName) => {
    if (selector[qName] === undefined) {
        return { q: 'Default number-bidmas- Q' }
    }
    let [a, b, c] = [0, 0, 0].map(x => rFuncs.randomInt(10) + 2)
    return {
        qType: 'shortAnswer',
        buildingBlocks: [],
        ...selector[qName](a, b, c)
    }
}

module.exports = {
    sectionName: 'bidmas',
    qGetter: sectionSetup
}