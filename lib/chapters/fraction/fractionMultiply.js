const rFuncs = require('../../nonQ/randFuncs');
const { wrapMJax } = require('../../nonQ/formatFuncs');
const { simplify, mixed2TopH, top2mixed } = require('../../nonQ/myMathFuncs');

const selector = {
    ordinary: ({ t1, t2, b1, b2 }) => {
        let calc = `${t1}/${b1}xx${t2}/${b2}`
        let ans = [t1 * t2, b1 * b2], simpAns = simplify(ans)
        return {
            q: `Calculate \n ${wrapMJax(calc)}`,
            a: `${simpAns[0]}/${simpAns[1]}`,
            hints: [
                `Try drawing a rectangle cut into ${b1} columns and ${b2} rows, then...`,
                `Start with all the squares in ${t2} out of the ${b2} rows, then...`,
                `Take ${t1}/${b1} of that many squares.`,
                `To do it by rote: top times top /  bottom times bottom`,
                `Simplify your answer`
            ],
            buildingBlocks: [
                'fraction-simplify-composite-90'
            ],
            qFeedback: `${wrapMJax(calc + `=${simpAns[0]}/${simpAns[1]}`)}`
        }
    },
    mixedNumbers: ({ w1, w2, t1, t2, b1, b2 }) => {
        // w1 = 6, t1 = 2, b1 = 3, w2 = 0, t2 = 3, b2 = 4;
        let calc = `${w1} ${t1}/${b1} xx ${w2} ${t2}/${b2}`
        let th1 = w1 * b1 + t1, th2 = w2 * b2 + t2;
        let ans = [th1 * th2, b1 * b2], simpAns = top2mixed(...simplify(ans))
        let formatedAns = simpAns[1] === 0 ? simpAns[0] : `${simpAns[0]} ${simpAns[1]}/${simpAns[2]}`
        return {
            q: `Calculate \n${wrapMJax(calc)}`,
            a: wrapMJax(formatedAns),
            hints: [
                `Convert the mixed numbers into top heavy fractions`,
            ],
            buildingBlocks: [
                'fraction-multiply-ordinary-85'
            ],
            qFeedback: `${wrapMJax(calc)} = ${wrapMJax(formatedAns)}`
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
    return {
        qType: 'shortAnswer',
        ...selector[qName]({ w1, w2, t1, t2, b1, b2 })
    }
}

module.exports = {
    sectionName: 'multiply',
    qGetter: sectionSetup
}