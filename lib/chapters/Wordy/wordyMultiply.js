const rFuncs = require('../../nonQ/randFuncs');

const selector = {
    EdexcelSampleAQ03: ({ name, monthly, months }) => {
        return {
            q: `${name} is paying for the internet. \nThe contract is £${monthly} per month for ${months} months \nHow much will ${name} pay in total?`,
            a: `£${monthly * months}`,
            hints: [
                `You can work this out month by month. Just keep adding £${monthly}`,
                `${name} pays the same amount ${months} times`,
                `Multiplying is the same as repeatedly adding`
            ],
            qFeedback: `${name} pays ${monthly} x ${months} = £${monthly * months}`,
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
        return { q: 'Default wordy-multiply- Q' }
    }
    let name = rFuncs.randomNames(1)[0];
    let monthly = rFuncs.randomInt(25) + 21; //21..45
    let months = [6, 12, 18][rFuncs.randomInt(3)]
    return {
        qType: 'shortAnswer',
        ...selector[qName]({ name, monthly, months }),
        buildingBlocks: ['number-multiplying-ab*cd-95']
    }
}

module.exports = {
    sectionName: 'multiply',
    qGetter: sectionSetup
}