const rFuncs = require('../../nonQ/randFuncs');

const selector = {
    EdexcelSampleAQ02: ({ name, bigDivisor, multiple, leftOver, total }) => {
        return {
            q: `${name} has ${total} DVDs to put on shelves. \nEach shelf holds ${bigDivisor} DVDs. \nHow many shelves can ${name} fill with DVDs? \nHow many DVDs will be left over? \nGive answer as '? rem ?'`,
            a: `${multiple} rem ${leftOver}`,
            hints: [
                `Write out the ${bigDivisor} times table`,
                `Find the biggest number in that table less than ${total}`
            ],
            qFeedback: `${multiple} shelves hold ${multiple*bigDivisor} DVDs with ${leftOver} left over`,
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
        return { q: 'Default wordy-divide- Q' }
    }
    let name = rFuncs.randomNames(1)[0];
    let bigDivisor = rFuncs.randomInt(20) + 18; //18..38
    if (bigDivisor % 10 === 0) { bigDivisor++ }
    let leftOver = rFuncs.randomInt(bigDivisor - 2) + 1; //1..36
    let multiple = rFuncs.randomInt(5) + 5; //5..9
    let total = bigDivisor * multiple + leftOver
    return {
        qType: 'shortAnswer',
        ...selector[qName]({ name, bigDivisor, multiple, leftOver, total })
    }
}

module.exports = {
    sectionName: 'divide',
    qGetter: sectionSetup
}