const rFuncs = require('../../nonQ/randFuncs');
const { penceToPounds } = require('../../nonQ/myMathFuncs');

const topics = ['weeks', 'prize', 'bill', 'holiday']
const selector = {
    weeks: ({ name, ans }) => {
        let w = (ans % 40) + 6, days = w * 7
        return {
            q: `It is ${days} days until ${name}'s birthday. \nHow many weeks is that?`,
            a: w,
            hints: [
                'There are 7 days in a week.',
                'Reveal the answer and see if you can figure out what to do to get it.'
            ],
            qFeedback: `${days} days are ${w} weeks`
        }
    },
    prize: ({ divisor, ans, product }) => {
        return {
            q: `${divisor} people share a prize of £${product}. \nHow much will each person get?`,
            a: '£' + ans,
            hints: [
                'Reveal the answer and see if you can figure out what to do to get it.'
            ],
            qFeedback: `They get £${ans} each`
        }
    },
    bill: ({ divisor, product, ans }) => {
        product = penceToPounds(product)
        ans = penceToPounds(ans)
        return {
            q: `${divisor} people share the cost a ${product} bill. \nHow much will each pay?`,
            a: ans,
            hints: [
                'Reveal the answer and see if you can figure out what to do to get it.'
            ],
            qFeedback: `They pay ${ans} each`
        }
    },
    holiday: ({ divisor, ans, product, weeks }) => {
        return {
            q: `${divisor} people went on holiday for ${weeks} weeks. Each week cost £${product}. /nIf they shared the cost equally, how much did each person pay?`,
            a: '£' + (ans * weeks),
            hints: [
                `One way to start is to find the total cost for ${weeks} weeks`,
                `Then share that total cost among the ${divisor} people`
            ],
            qFeedback: `They pay £${ans*weeks} each`
        }
    }
}

const sectionSetup = (qName) => {
    if (selector[qName] === undefined) {
        qName = rFuncs.randomElement(topics)
    }
    let divisor = rFuncs.randomInt(7) + 3; //3..9
    let ans = rFuncs.randomInt(200) + 23
    let product = divisor * ans
    let weeks = rFuncs.randomInt(3) + 2; // 2, 3, 4
    let name = rFuncs.randomNames(1)[0]
    return {
        qType: 'shortAnswer',
        buildingBlocks: ['number-busStop-noRemainder-150'],
        ...selector[qName]({ divisor, ans, product, name, weeks })
    }
}

module.exports = {
    sectionName: 'busStop',
    qGetter: sectionSetup
}