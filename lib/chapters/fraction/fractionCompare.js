const rFuncs = require('../../nonQ/randFuncs');
const myMath = require('../../nonQ/myMathFuncs');

const selector = {
    sameDenom: ({ top1, top2, denom1 }) => {
        top2 = (top2 % denom1) || denom1 - 1
        if (top1 === top2) {top1 = top1 === 1 ? denom1 - 1 : top1 - 1}
        let frac1 = `${top1}/${denom1}`, frac2 = `${top2}/${denom1}`
        return {
            q: `Which fraction is bigger? \n${frac1} or ${frac2}`,
            a: top1 > top2 ? frac1 : frac2,
        }
    },
    sameNumer: () => {
        return {
            q: 'Default fraction-compare-sameNumer question',
            a: 42,
        }
    },
    noMatch: () => {
        return {
            q: 'Default fraction-compare-noMatch question',
            a: 42,
        }
    }
}

const compareSetup = (qName) => {
    if (selector[qName] === undefined) {
        return { q: 'Default fraction-compare- Q' }
    }
    let [denom1, denom2] = rFuncs.nRandomInts(2, 20, 3)
    while (myMath.gcd([denom1, denom2]) !== 1) { denom2++ }
    let gcd = myMath.gcd([denom1, denom2]), lcm = denom1 * denom2 / gcd
    let multInv = myMath.multInv(denom1, denom2)
    let top1 = rFuncs.randomInt(denom1 - 1) + 1
    let top2 = rFuncs.randomInt(denom2 - 1) + 1
    return selector[qName]({ top1, top2, denom1, denom2, lcm, multInv })
}

module.exports = {
    sectionName: 'compare',
    qGetter: compareSetup
}