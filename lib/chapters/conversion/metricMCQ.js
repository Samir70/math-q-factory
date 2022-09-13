const rFuncs = require('../../nonQ/randFuncs');

const rates = {
    'MMinCM': 10, 'CMinM': 100, 'MMinM': 1000, 'MinKM': 1000, 'CMinKM': 100000, 'MMinKM': 1000000,
    'GinKG': 1000, 'MGinKG': 1000000, 'MGinG': 1000,
    'MLinL': 1000, 'CLinL': 100, 'MLinCL': 10
}
const wrongRates = {
    'MMinCM': [100, 1000, 0.1], 'CMinM': [10, 1000, 30], 'MMinM': [10, 100],
    'MinKM': [100, 1.6, 0.6], 'CMinKM': [100, 1000, 10000], 'MMinKM': [10000, 1000],
    'GinKG': [100, 2.2, 14], 'MGinKG': [100, 1000, 10000], 'MGinG': [100, 10000, 1000000],
    'MLinL': [10, 100], 'CLinL': [10, 1000], 'MLinCL': [100, 0.1]
}

const abbrevs = {
    MM: 'millimetre', CM: 'centimetre', M: 'metre', KM: 'kilometre',
    G: 'gram', MG: 'milligram', KG: 'kilogram',
    ML: 'millilitre', CL: 'centilitre', L: 'litre'
}


const sectionSetup = (qName) => {
    if (qName === 'rndLow') {
        qName = rFuncs.randomElement(['howManyMMinCM', 'howManyCMinM', 'howManyMinKM', 'howManyGinKG', 'howManyMLinL'])
    } else if (qName === 'rndHigh') {
        qName = rFuncs.randomElement(['howManyMMinM', 'howManyCMinKM', 'howManyMMinKM', 'howManyMGinG'])
    }
    console.log(qName)
    let unitPair = qName.split('howMany')[1];
    const [unit1, unit2] = unitPair.split('in')
    return {
        qType: 'multiChoice',
        q: `How many ${abbrevs[unit1]}s in a ${abbrevs[unit2]}?`,
        a: rates[unitPair],
        wrongOptions: wrongRates[unitPair]
    }
}

module.exports = {
    sectionName: 'metricMCQ',
    qGetter: sectionSetup
}