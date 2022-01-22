const rFuncs = require('../../nonQ/randFuncs');

const selector = {
    EdexcelSampleAQ01: ({ name, amounts }) => {
        const rent = 2 * amounts.slice(1).reduce((a, b) => a + b, 0);
        const bills = amounts[0]
        return {
            q: `${name} moves into a new flat. \nThe rent is £${rent} a month, and \nthe bills are £${bills} a month \nCalculate the total of these amounts. `,
            a: '£' + (rent + bills),
            source: 'Edexcel FS E3 sample exam paper A'
        }
    },
    // qName2: () => {
    //     return {
    //         q: 'Default chapter-section-qName1 question',
    //         a: 42,
    //     }
    // }
}

const sectionSetup = (qName) => {
    if (selector[qName] === undefined) {
        return { q: 'Default wordy-findTotal- Q' }
    }
    const name = rFuncs.randomNames(1)[0]
    const amounts = [0, 0, 0, 0].map(x => rFuncs.randomInt(100) + 100)
    return selector[qName]({ name, amounts })
}

module.exports = {
    sectionName: 'findTotal',
    qGetter: sectionSetup
}