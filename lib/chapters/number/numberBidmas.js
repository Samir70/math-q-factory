const rFuncs = require('../../nonQ/randFuncs');
const { wrapMJax } = require('../../nonQ/formatFuncs');

const selector = {
    'a+bxc': (a, b, c) => {
        let expr = `${a} + ${b} x ${c}`
        return {
            q: `${expr} = ....`,
            a: a + b * c,
            qFeedback: `${expr} = ${a + b * c}`
        }
    },
    'axbtakec': (a, b, c) => {
        let expr = `${a} x ${b} - ${c}`
        return {
            q: `${expr} = ....`,
            a: a * b - c,
            qFeedback: `${expr} = ${a * b - c}`
        }
    },
    'ax(b+c)': (a, b, c) => {
        let expr = `${a} x (${b} + ${c})`
        return {
            q: `${expr} = ....`,
            a: a * (b - c),
            qFeedback: `${expr} = ${a * (b + c)}`
        }
    },
    'atakeb+c': (a, b, c) => {
        let expr = `${a} - ${b} + ${c}`
        return {
            q: `${expr} = ....`,
            a: a - b + c,
            qFeedback: `${expr} = ${a - b + c}`
        }
    },
    'a^2takebxc': (a, b, c) => {
        let expr = wrapMJax(`${a}^2 - ${b} xx ${c}`)
        return {
            q: `${expr} = ....`,
            a: a * a - b * c,
            qFeedback: `${expr} = ${a * a - b * c}`
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
        hints: ['Look up what BIDMAS stands for'],
        buildingBlocks: [],
        ...selector[qName](a, b, c)
    }
}

module.exports = {
    sectionName: 'bidmas',
    qGetter: sectionSetup
}