const rFuncs = require('../../nonQ/randFuncs');
const formatFuncs = require('../../nonQ/formatFuncs');

const selector = {
    'loavesToFlour': () => {
        return {
            q: 'Default chapter-section-qName1 question',
            a: 42,
        }
    },
    'flourToBags': () => {
        return {
            q: 'Default chapter-section-qName2 question',
            a: 42,
        }
    },
    'meanNoBags': ({ fiveMonthsBags, flourPerBag, flourPerLoaf, names }) => {
        let bagsM5 = fiveMonthsBags[4];
        let loavesInM5 = bagsM5 * flourPerBag * 1000 / flourPerLoaf;
        let mean = fiveMonthsBags.reduce((a, c) => a+c) / 5
        return {
            q: `${names.join(' and ')} work in a bakery and buy flour in ${flourPerBag}Kg bags. \n` +
                `In the first four months they used \n` +
                `${formatFuncs.joinList(fiveMonthsBags.slice(0, 4))} bags of flour.\n` +
                `They need ${flourPerLoaf}g of flour for every loaf of bread.\n` +
                `In the fifth month they make ${loavesInM5} loaves of bread. \n` +
                `Calculate the mean number of bags of flour for the five months`,
            a: mean,
            qFeedback: `${names.join(' and ')} use ${bagsM5} bags in the fifth month, making the mean ${mean} bags per month`,
            hints: [
                `Can you work out how much flour is needed to make ${loavesInM5} loaves of bread?`,
                `${loavesInM5} loaves need ${loavesInM5 * flourPerLoaf}g of flour`,
                `They need ${loavesInM5 * flourPerLoaf/1000}Kg of flour in the fifth month`,
                `How many bags of flour is ${loavesInM5 * flourPerLoaf/1000}Kg ?`,
                `They need ${bagsM5} bags of flour in the fifth month`,
                `Find the mean of ${formatFuncs.joinList(fiveMonthsBags)}`
            ]
        }
    }
}

const sectionSetup = (qName) => {
    if (selector[qName] === undefined) {
        return { q: 'Default examQ-bakery- Q' }
    }
    let fiveMonthsBags = rFuncs.nRandomInts(5, 12, 20);
    let flourPerLoaf = rFuncs.randomElement([125, 200, 250]);
    let flourPerBag = rFuncs.randomElement([15, 20, 25, 30, 40, 50]);
    let names = rFuncs.randomNames(2)
    return {
        qType: 'shortAnswer',
        ...selector[qName]({ fiveMonthsBags, flourPerBag, flourPerLoaf, names })
    }
}

module.exports = {
    sectionName: 'bakeryQ',
    qGetter: sectionSetup
}