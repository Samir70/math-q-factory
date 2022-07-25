const rFuncs = require('../../nonQ/randFuncs');

const convRates = {
    'mm2cm': 1, 'mm2m': 3, 'mm2km': 6,
    'cm2m': 2, 'cm2km': 5,
    'm2km': 3,
    'mg2g': 3, 'g2kg': 3,
    'mL2cL': 1, 'mL2L': 3, 'cL2L': 2
}

const sectionSetup = (qName) => {
    if (qName === 'rndLow') {
        qName = rFuncs.randomElement([
            'mm2cm#', 'mm2cm#REV', 'mm2cm#DEC', 'mm2cm#DECREV',
            'cm2m#', 'cm2m#REV', 'cm2m#DEC', 'cm2m#DECREV',
            'm2km#', 'm2km#REV', 'm2km#DEC', 'm2km#DECREV',
            'g2kg#', 'g2kg#REV', 'g2kg#DEC', 'g2kg#DECREV',
            'mL2L#', 'mL2L#REV', 'mL2L#DEC', 'mL2L#DECREV',
        ])
    }
    if (qName === 'rndHigh') {
        qName = rFuncs.randomElement([
            'mm2m#', 'mm2m#REV', 'mm2m#DEC', 'mm2m#DECREV',
            'mm2km#', 'mm2km#REV', 'mm2km#DEC', 'mm2km#DECREV',
            'cm2km#', 'cm2km#REV', 'cm2km#DEC', 'cm2km#DECREV',
            'mg2g#', 'mg2g#REV', 'mg2g#DEC', 'mg2g#DECREV',
            'mL2cL#', 'mL2cL#REV', 'mL2cL#DEC', 'mL2cL#DECREV',
            'cL2L#', 'cL2L#REV', 'cL2L#DEC', 'cL2L#DECREV'
        ])
    }
    let convPair = qName.split('#')[0];
    if (convRates[convPair] === undefined) {
        return { q: 'Default chapter-section- Q' }
    }
    let [smallUnit, largeUnit] = convPair.split('2');
    let convRate = convRates[convPair];
    let smallVal = rFuncs.randomInt(30) + 2;
    let numDecimals = Math.min(3, rFuncs.randomInt(convRate) + 1);
    let decimal = rFuncs.randomInt(10 ** numDecimals - 1) + 1;
    let useDecimal = qName.includes('DEC');
    let smallValString = smallVal + (useDecimal ? '.' + decimal : '');
    let largeValString = smallValString + 'e' + convRate;
    let largeVal = Number(largeValString);
    let reversed = qName.includes('REV');
    let values = [largeVal + smallUnit, smallValString + largeUnit]
    let [forQ, forAns] = reversed ? [1, 0] : [0, 1]
    return {
        qType: 'shortAnswer',
        q: `Convert ${values[forQ]} into ${reversed ? smallUnit : largeUnit}`,
        a: values[forAns],
        hints: [
            `How many ${smallUnit} are there in a ${largeUnit}?`,
            `There are ${10**convRate}${smallUnit}'s in a ${largeUnit}`
        ],
        qFeedback: `${values[forQ]} = ${values[forAns]} `,
        buildingBlocks: []
    }
}

module.exports = {
    sectionName: 'metric',
    qGetter: sectionSetup
}
