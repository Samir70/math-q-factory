const rFuncs = require('../../nonQ/randFuncs');
const myMaths = require('../../nonQ/myMathFuncs');
const { wrapMJax } = require('../../nonQ/formatFuncs');

const selector = {
    sameDenom: ({ top1, top2, bottom1 }) => {
        let ans = myMaths.simplify([top1 + top2, bottom1])
        let mjaxText = wrapMJax(`${top1}/${bottom1} + ${top2}/${bottom1}`)
        return {
            q: `What is: ${mjaxText} \nSimplify your answer`,
            a: wrapMJax(ans.join('/')),
            hints: [
                'All the slices are the same size',
                `How many of the ${bottom1} slices do you have in total?`,
                `Try drawing a cake cut into ${bottom1} pieces and \nshade in ${top1} ${top1 === 1 ? 'piece' : 'pieces'}, then another ${top2}`
            ],
            qFeedback: `${mjaxText} is ${wrapMJax(ans.join('/'))}`
        }
    },
    diffDenomChangeOne: ({ top1, top2, bottom1, multiplier }) => {
        let bottom2 = bottom1 * multiplier
        let mjaxText = wrapMJax(`${top1}/${bottom1} + ${top2}/${bottom2}`)
        let ans = myMaths.simplify([top1 * bottom2 + top2 * bottom1, bottom1 * bottom2])
        return {
            q: `What is ${mjaxText} \nSimplify your answer`,
            a: wrapMJax(ans.join('/')),
            hints: [
                'Can you change one of the fractions so it has the same denominator as the other?'
            ],
            qFeedback: `${mjaxText} is ${wrapMJax(ans.join('/'))}`
        }
    },
    diffDenomChangeBoth: ({ top1, top2, bottom1, bottom2 }) => {
        let mjaxText = wrapMJax(`${top1}/${bottom1} + ${top2}/${bottom2}`)
        let ans = myMaths.simplify([top1 * bottom2 + top2 * bottom1, bottom1 * bottom2])
        return {
            q: `What is ${mjaxText} \nSimplify your answer`,
            a: wrapMJax(ans.join('/')),
            hints: [
                'You need to use equivalent fractions that have the same denominator'
            ],
            qFeedback: `${mjaxText} is ${wrapMJax(ans.join('/'))}`
        }
    },
    mixedNumbers: ({ top1, bottom1, top2, bottom2, whole1, whole2 }) => {
        let mjaxText = wrapMJax(`${whole1} ${top1}/${bottom1} + ${whole2} ${top2}/${bottom2}`)
        let fractionalPart = myMaths.simplify([top1 * bottom2 + top2 * bottom1, bottom1 * bottom2])
        let ans = wrapMJax((whole1 + whole2) + ' ' + fractionalPart.join('/'));
        return {
            q: `What is ${mjaxText} \nSimplify your answer`,
            a: ans,
            hints: [
                'The big numbers are whole numbers of cakes',
                'Add the big numbers on their own, then add the fractions.',
                "If you can't add fractions, then look in the building blocks"
            ],
            qFeedback: `${mjaxText} is ${ans}`
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
    return {
        qType: 'shortAnswer',
        ...selector[qName]({ multiplier, top1, bottom1, top2, bottom2, whole1, whole2 })
    }
}

module.exports = {
    sectionName: 'add',
    qGetter: sectionSetup
}