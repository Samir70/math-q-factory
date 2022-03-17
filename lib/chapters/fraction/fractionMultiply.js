const rFuncs = require('../../nonQ/randFuncs');
const { wrapMJax } = require('../../nonQ/formatFuncs');
const { simplify } = require('../../nonQ/myMathFuncs');

const selector = {
    ordinary: ({ t1, t2, b1, b2 }) => {
        let calc = `${t1}/${b1}xx${t2}/${b2}`
        let ans = [t1 * t2, b1 * b2], simpAns = simplify(ans)
        return {
            q: `Calculate \n ${wrapMJax(calc)}`,
            a: `${simpAns[0]}/${simpAns[1]}`,
        }
    },
    mixedNumbers: () => {
        return {
            q: 'Default fracMultMixed question',
            a: 42,
        }
    }
}

const sectionSetup = (qName) => {
    if (selector[qName] === undefined) {
        return { q: 'Default fraction-multiply- Q' }
    }
    // w1, w2 are the whole numbers, t1, t2 the top of each fraction, b1, b2 the bottom
    let [w1, w2] = [6, 7].map(n => rFuncs.randomInt(5) + 1);
    let [t1, b1] = rFuncs.randomCoprimePair(false);
    let [t2, b2] = rFuncs.randomCoprimePair(false);
    return selector[qName]({ w1, w2, t1, t2, b1, b2 })
}

module.exports = {
    sectionName: 'multiply',
    qGetter: sectionSetup
}