const rFuncs = require('../../nonQ/randFuncs');
const { penceToPounds } = require('../../nonQ/myMathFuncs');

const selector = {
    EdexcelSampleAQ01: ({ name, amounts }) => {
        const rent = 2 * amounts.slice(1).reduce((a, b) => a + b, 0);
        const bills = amounts[0]
        return {
            q: `${name} moves into a new flat. \nThe rent is £${rent} a month, and \nthe bills are £${bills} a month \nCalculate the total of these amounts. `,
            a: '£' + (rent + bills),
            source: 'Edexcel FS E3 sample exam paper A',
            hints: ['The total is found by adding numbers together.'],
            qFeedback: `The total is ${rent} + ${bills} = £${rent + bills}`
        }
    },
    'fruit&Veg': ({ name, amounts }) => {
        let fruit = amounts[0] + amounts[1], veg = amounts[2] + amounts[3]
        let total = fruit + veg, totalStr = ''
        return {
            q: `${name} is in the supermarket and spends ${penceToPounds(fruit)} on fruit and ${penceToPounds(veg)} on vegetables. \nFind the total spent`,
            a: penceToPounds(total),
            hints: ['When adding decimals in columns, make sure the decimal points line up'],
            qFeedback: `The total is ${penceToPounds(fruit)} + ${penceToPounds(veg)} = ${penceToPounds(total)}`
        }
    }
}

const sectionSetup = (qName) => {
    if (selector[qName] === undefined) {
        return { q: 'Default wordy-findTotal- Q' }
    }
    const name = rFuncs.randomNames(1)[0]
    const amounts = [0, 0, 0, 0].map(x => rFuncs.randomInt(100) + 100)
    return {
        qType: 'shortAnswer',
        buildingBlocks: [],
        ...selector[qName]({ name, amounts })
    }
}

module.exports = {
    sectionName: 'findTotal',
    qGetter: sectionSetup
}