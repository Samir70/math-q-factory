const rFuncs = require('../../nonQ/randFuncs');
const myMath = require('../../nonQ/myMathFuncs');

const selector = {
    sameDenom: ({ simp1 }) => {
        let [top1, bottom] = simp1;
        if (bottom % 2 === 0) { bottom++ }
        // now that bottom is odd, the below puts top2 above or below top1 with equal chances
        // it gives a hacky way to solve the Q, but the straightforward way is easier!
        let top2 = top1 < bottom / 2 ? top1 + 1 : top1 - 1
        let frac1 = [top1, bottom].join('/'), frac2 = [top2, bottom].join('/')
        return {
            qType: 'shortAnswer',
            q: `Which fraction is bigger? \n${frac1} or ${frac2}`,
            a: top1 > top2 ? frac1 : frac2,
            hints: [
                `Both fractions would cut a cake into ${bottom} slices`,
                `The ${top1 > top2 ? 'first' : 'second'} fraction has more of the ${bottom} slices`,
            ],
            qFeedback: `${top1 > top2 ? frac1 : frac2} is bigger than ${top1 > top2 ? frac2 : frac1}`
        }
    },
    sameNumer: ({ simp1 }) => {
        let [top, bottom1] = simp1;
        let bottom2 = top < bottom1 / 2 ? bottom1 - 1 : bottom1 + 1
        let frac1 = [top, bottom1].join('/'), frac2 = [top, bottom2].join('/')
        return {
            qType: 'shortAnswer',
            q: `Which fraction is bigger? \n${frac1} or ${frac2}`,
            a: bottom1 < bottom2 ? frac1 : frac2,
            hints: [
                `Both fractions are taking ${top} of the available slices`,
                `The ${bottom1 < bottom2 ? 'first' : 'second'} fraction would cut a cake into bigger slices`,
            ],
            qFeedback: `${bottom1 < bottom2 ? frac1 : frac2} is bigger than ${bottom1 < bottom2 ? frac2 : frac1}`
        }
    },
    noMatch: ({ big1, big2, simp1, simp2 }) => {
        let ans = big1[0] > big2[0] ? simp1.join('/') : simp2.join('/')
        return {
            qType: 'shortAnswer',
            q: `Which fraction is bigger? \n${simp1.join('/')} or ${simp2.join('/')}`,
            a: ans,
            hints: [
                `This question can be answered using either equivalent fractions or fractions of amounts`,
                `It would be easier to tell which is bigger if the fractions had the same denominator.`,
                `Convert both fractions to something over ${big1[1]}`,
                `If changing the fractions didn't help, try finding ${simp1.join('/')} or ${simp2.join('/')} of ${big1[1]}`
            ],
            qFeedback: `${ans} is bigger as seen from the equivalent fractions ${big1.join('/')}, ${big2.join('/')}`
        }
    }
}

const compareSetup = (qName) => {
    if (selector[qName] === undefined) {
        return { q: 'Default fraction-compare- Q' }
    }
    // some overkill to make sure that the given fractions with different denominators
    // differ by one slice when put over least common denominator
    let [denom1, denom2] = rFuncs.nRandomInts(2, 12, 3)
    while (myMath.gcd([denom1, denom2]) !== 1) { denom2++ }
    let lcm = denom1 * denom2
    let multInv, big1, big2
    if (rFuncs.randomInt(2)) {
        multInv = myMath.multInv(denom1, denom2)
        big1 = [denom1 * multInv, lcm], big2 = [denom1 * multInv - 1, lcm]
    } else {
        multInv = myMath.multInv(denom2, denom1)
        big1 = [denom2 * multInv - 1, lcm], big2 = [denom2 * multInv, lcm]
    }
    let simp1 = myMath.simplify(big1), simp2 = myMath.simplify(big2)
    return selector[qName]({ big1, big2, simp1, simp2 })
}

module.exports = {
    sectionName: 'compare',
    qGetter: compareSetup
}