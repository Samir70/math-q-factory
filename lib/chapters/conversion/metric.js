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
    'mm2cm': 10, 'mm2m': 1000, 'mm2km': 1000000, 
    'cm2m':100, 'cm2km':100000,
    'm2km': 1000,
    'mg2g': 1000, 'g2kg': 1000,
    'mL2cL': 10, 'mL2L': 1000, 'cL2L': 100
}

// set up the randomly set variables here and pass them as arguments to above functions
// if the above are using very different sets of variables, 
// then maybe they need to be split into different sections
const sectionSetup = (qName) => {
    if (true) {           //selector[qName] === undefined) {
        return { q: 'Default chapter-section- Q' }
    }
    let convPair = qName.split('#');
    let [smallUnit, largeUnit] = convPair.split('2');
    let convRate = convRates[convPair];
    let smallVal = rFuncs.randomInt(30) + 2;
    let numDecimals = rFuncs.randomInt(convRate.toString.length - 1) + 1;    
    let decimal = rFuncs.randomInt(10**numDecimals - 1) + 1;
    let largeVal = smallVal * convRate
    let reversed = qName.includes('REV');
    let useDecimal = qName.includes('DEC');
    largeVal += useDecimal ? decimal * convRate / (10**numDecimals) : 0
    let smallValString = smallVal + (useDecimal ? '.'+decimal : '')
    let values = [largeVal + smallUnit, smallValString + largeUnit]
    let [forQ, forAns] = reversed ? [1, 0] : [0, 1]
    return {
        qType: 'short-answer',        
        q: `Convert ${values[forQ]} into ${reversed ? smallUnit : largeUnit}`, 
	    a: values[forAns]
    }
}
/*
Note ERROR###################################
{qType: 'short-answer', q: 'Convert 16084000mm into km', a: '16.8400km', useDecimal: true, reversed: false, …}
a: "16.8400km"
decimal: 8400
q: "Convert 16084000mm into km"
qType: "short-answer"
reversed: false
smallVal: 16
useDecimal: true
*/

// this needs to be imported into a sectionList file
// eg: mean would be part of the dataSectionList
module.exports = {
    // sectionName: '',
    // qGetter: sectionSetup
}
