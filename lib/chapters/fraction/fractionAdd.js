const rFuncs = require('../../nonQ/randFuncs');
const myMaths = require('../../nonQ/myMathFuncs');
const { wrapMJax } = require('../../nonQ/formatFuncs');

const selector = {
    sameDenom: ({ top1, top2, bottom1 }) => {
        let ans = myMaths.simplify([top1 + top2, bottom1])
        let mjaxText = wrapMJax(`${top1}/${bottom1} + ${top2}/${bottom1}`)
        return {
            q: `What is: ${mjaxText}`,
            a: wrapMJax(ans.join('/')),
        }
    },
    diffDenomChangeOne: ({ top1, top2, bottom1, multiplier }) => {
        let bottom2 = bottom1 * multiplier
        let mjaxText = wrapMJax(`${top1}/${bottom1} + ${top2}/${bottom2}`)
        let ans = myMaths.simplify([top1 * bottom2 + top2 * bottom1, bottom1 * bottom2])
        return {
            q: `What is ${mjaxText}`,
            a: wrapMJax(ans.join('/')),
        }
    },
    diffDenomChangeBoth: ({ top1, top2, bottom1, bottom2 }) => {
        let mjaxText = wrapMJax(`${top1}/${bottom1} + ${top2}/${bottom2}`)
        let ans = myMaths.simplify([top1 * bottom2 + top2 * bottom1, bottom1 * bottom2])
        return {
            q: `What is ${mjaxText}`,
            a: wrapMJax(ans.join('/')),
        }
    },
    mixedNumbers: () => {
        return {
            q: 'Default chapter-section-mixedNumbers question',
            a: 42,
        }
    }
}

const sectionSetup = (qName) => {
    if (selector[qName] === undefined) {
        return { q: 'Default fraction-add- Q' }
    }
    let [top1, top2] = [0, 0].map(x => rFuncs.randomInt(4) + 1)
    let bottom1 = top1 + top2 + rFuncs.randomInt(4) + 1;
    let multiplier = rFuncs.randomInt(4) + 2
    let bottom2 = bottom1 + rFuncs.randomInt(4) + 1
    let [whole1, whole2] = [0, 0].map(x => rFuncs.randomInt(4) + 1)
    return selector[qName]({ multiplier, top1, bottom1, top2, bottom2, whole1, whole2 })
}

module.exports = {
    sectionName: 'add',
    qGetter: sectionSetup
}