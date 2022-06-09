const rFuncs = require('../../nonQ/randFuncs');
const formatFuncs = require('../../nonQ/formatFuncs');

const selector = {
    'loavesToFlour': ({loavesInM5, flourPerLoaf, name}) => {
        let ans = loavesInM5 * flourPerLoaf / 1000
        return {
            q: `${name} uses ${flourPerLoaf}g of flour to make a loaf of bread. \n`+
                `How many Kgs of flour would ${name} need to make ${loavesInM5} loaves of bread?`,
            a: ans,
            qFeedback: `${name} needs ${ans}Kg of flour.`,
            hints: [
                `Multiply ${flourPerLoaf} by the number of loaves`,
                `There are 1000g in a kg`
            ],
            buildingBlocks: []
        }
    },
    'flourToBags': ({bagsM5, flourPerBag}) => {
        return {
            q: `A bakery buys flour in ${flourPerBag}Kg bags. \nHow many bags would weigh ${bagsM5*flourPerBag}Kg ?`,
            a: bagsM5,
            qFeedback: `${bagsM5} bags would weigh ${bagsM5*flourPerBag}Kg`,
            hints: [
                `Either write out the ${flourPerBag} times table, or...`
            ], 
            buildingBlocks: []
        }
    },
    'loavesToBags': ({bagsM5, loavesInM5, flourPerLoaf, flourPerBag}) => {
        return {
            q: `A bakery buys flour in ${flourPerBag}Kg bags. \nThey use ${flourPerLoaf}g of flour per loaf.\n`+
                `In one month they make ${loavesInM5} loaves of bread. \nHow many bags of flour are used?`,
            a: bagsM5,
            qFeedback: `They use ${bagsM5} bags of flour.`,
            hints: [
                `Can you work out how much flour is needed to make ${loavesInM5} loaves of bread?`,
                `${loavesInM5} loaves need ${loavesInM5 * flourPerLoaf}g  = ${loavesInM5 * flourPerLoaf/1000}Kg of flour`,
                `How many bags of flour is ${loavesInM5 * flourPerLoaf/1000}Kg ?`,
            ], 
            buildingBlocks: [
                'examQs-bakeryQ-loavesToFlour-149', 'examQs-bakeryQ-flourToBags-150', 
            ]
        }
    },
    'meanNoBags': ({ fiveMonthsBags, bagsM5, loavesInM5, flourPerBag, flourPerLoaf }) => {
        let mean = fiveMonthsBags.reduce((a, c) => a+c) / 5
        return {
            q: `A bakery buys flour in ${flourPerBag}Kg bags. \n` +
                `In the first four months they used \n` +
                `${formatFuncs.joinList(fiveMonthsBags.slice(0, 4))} bags of flour.\n` +
                `They need ${flourPerLoaf}g of flour for every loaf of bread.\n` +
                `In the fifth month they make ${loavesInM5} loaves of bread. \n` +
                `Calculate the mean number of bags of flour for the five months`,
            a: mean,
            qFeedback: `The bakery uses ${bagsM5} bags in the fifth month, making the mean ${mean} bags per month`,
            hints: [
                `Can you work out how much flour is needed to make ${loavesInM5} loaves of bread?`,
                `${loavesInM5} loaves need ${loavesInM5 * flourPerLoaf}g of flour`,
                `They need ${loavesInM5 * flourPerLoaf/1000}Kg of flour in the fifth month`,
                `How many bags of flour is ${loavesInM5 * flourPerLoaf/1000}Kg ?`,
                `They need ${bagsM5} bags of flour in the fifth month`,
                `Find the mean of ${formatFuncs.joinList(fiveMonthsBags)}`
            ],
            buildingBlocks: [
                'data-mean-anyAnswer-135', 'examQs-bakeryQ-loavesToBags-175'
            ]
        }
    }
}

const sectionSetup = (qName) => {
    if (selector[qName] === undefined) {
        return { q: 'Default examQ-bakery- Q' }
    }
    let fiveMonthsBags = rFuncs.nRandomInts(5, 12, 20);
    let bagsM5 = fiveMonthsBags[4];
    let flourPerLoaf = rFuncs.randomElement([125, 200, 250]);
    let flourPerBag = rFuncs.randomElement([15, 20, 25, 30, 40, 50]);
    let loavesInM5 = bagsM5 * flourPerBag * 1000 / flourPerLoaf;
    let name = rFuncs.randomNames(1)[0]
    return {
        qType: 'shortAnswer',
        ...selector[qName]({ fiveMonthsBags, bagsM5, loavesInM5, flourPerBag, flourPerLoaf, name })
    }
}

module.exports = {
    sectionName: 'bakeryQ',
    qGetter: sectionSetup
}