const rFuncs = require('../../nonQ/randFuncs');

// As always: comments can be removed once the default Qs are accessable

/*
need paths for
metric: [
            'rndLow-85', 'rndHigh-120',
            'mm2cm#-60', 'mm2cm#REV-60', 'mm2cm#DEC-85', 'mm2cm#DECREV-85', 
            'mm2m#-98', 'mm2m#REV-98', 'mm2m#DEC-110', 'mm2m#DECREV-110', 
            'mm2km#-130', 'mm2km#REV-130', 'mm2km#DEC-145', 'mm2km#DECREV-145', 
            'cm2m#-75', 'cm2m#REV-75', 'cm2m#DEC-95', 'cm2m#DECREV-95', 
            'cm2km#-130', 'cm2km#REV-130', 'cm2km#DEC-145', 'cm2km#DECREV-145', 
            'm2km#-75', 'm2km#REV-75', 'm2km#DEC-95', 'm2km#DECREV-95', 
            'mg2g#-105', 'mg2g#REV-105', 'mg2g#DEC-145', 'mg2g#DECREV-145', 
            'g2kg#-75', 'g2kg#REV-75', 'g2kg#DEC-95', 'g2kg#DECREV-95',             
            'mL2cL#-85', 'mL2cL#REV-85', 'mL2cL#DEC-105', 'mL2cL#DECREV-105', 
            'mL2L#-75', 'mL2L#REV-75', 'mL2L#DEC-95', 'mL2L#DECREV-95', 
            'cL2L#-105', 'cL2L#REV-105', 'cL2L#DEC-115', 'cL2L#DECREV-115'
        ],
*/
const convRates = {
    'mm2cm': 1, 'mm2m': 3, 'mm2km': 6,
    'cm2m': 2, 'cm2km': 5,
    'm2km': 3,
    'mg2g': 3, 'g2kg': 3,
    'mL2cL': 1, 'mL2L': 3, 'cL2L': 2
}

// set up the randomly set variables here and pass them as arguments to above functions
// if the above are using very different sets of variables, 
// then maybe they need to be split into different sections
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
        qType: 'short-answer',
        q: `Convert ${values[forQ]} into ${reversed ? smallUnit : largeUnit}`,
        a: values[forAns],
        values, decimal, numDecimals, convRate
    }
}

console.log(sectionSetup('rndLow'))

// this needs to be imported into a sectionList file
// eg: mean would be part of the dataSectionList
module.exports = {
    // sectionName: '',
    // qGetter: sectionSetup
}
