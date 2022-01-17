const rFuncs = require('../../nonQ/randFuncs');
const myMaths = require('../../nonQ/myMathFuncs');

const selector = {
    sameDenom: ({ top1, top2, bottom1 }) => {
        bottom1 = Math.max(top1, top2, bottom1) + 1
        let ans = myMaths.simplify([top1 + top2, bottom1])
        if (ans[0] === ans[1]) { ans = [1] }
        return {
            q: `What is: ${top1}/${bottom1} + ${top2}/${bottom1}`,
            a: ans.join('/'),
        }
    },
    diffDenom: () => {
        return {
            q: 'Default chapter-section-diffDenom question',
            a: 42,
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
    let nums = [0, 0, 0, 0, 0, 0].map(x => rFuncs.randomInt(9) + 1)
    let [top1, bottom1, top2, bottom2, whole1, whole2] = nums
    return selector[qName]({ top1, bottom1, top2, bottom2, whole1, whole2 })
}

module.exports = {
    sectionName: 'add',
    qGetter: sectionSetup
}