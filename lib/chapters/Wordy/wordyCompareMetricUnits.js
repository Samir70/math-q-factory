const rFuncs = require('../../nonQ/randFuncs');

const selector = {
    EdexcelSampleAQ04: ({ name, smallContainer, itemDetails }) => {
        let ans = '', wrongOptions = [];
        if (smallContainer > 500) {
            ans = 'No';
            wrongOptions = ['Yes']
        } else {
            ans = 'Yes';
            wrongOptions = ['No']
        }
        let { item, container, units } = itemDetails
        return {
            q: `${name} is buying ${item}. There are two offers: \nA one ${units[0]} ${container}, or \nTwo ${container}s that are ${smallContainer}${units[1]} each. \nDoes the one ${units[0]} ${container} contain more than the two small ${container}s?`,
            a: ans, wrongOptions,
            source: 'Edexcel FS E3 sample exam paper A', 
            hints: [

            ]
        }
    },
    // qName2: () => {
    //     return {
    //         q: 'Default chapter-section-qName1 question',
    //         a: 42,
    //     }
    // }
}

const itemsAndUnits = [
    { item: 'cleaning liquid', container: 'bottle', units: ['litre', 'ml'] },
    { item: 'flour', container: 'bag', units: ['Kg', 'g'] }
]

const sectionSetup = (qName) => {
    if (selector[qName] === undefined) {
        return { q: 'Default wordy-compareMetricUnits- Q' }
    }
    let name = rFuncs.randomNames(1)[0];
    let smallContainer = rFuncs.randomInt(100) + 451; // 451..550
    let itemDetails = rFuncs.randomElement(itemsAndUnits)
    return {
        qType: 'multiChoice',
        ...selector[qName]({ name, smallContainer, itemDetails })
    }
}

module.exports = {
    sectionName: 'compareMetricUnits',
    qGetter: sectionSetup
}