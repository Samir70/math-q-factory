const rFuncs = require('../../nonQ/randFuncs');
const myMath = require('../../nonQ/myMathFuncs');

const hrsMinsData = () => {
    let halfHrs = rFuncs.randomInt(7) + 3 // 3, 4, 5, 6, 7, 8, 9
    let hrs = halfHrs * 0.5 // javascript always give accurate answer to times by 1/2
    let mins = (rFuncs.randomInt(11) + 1) * 5 // 5, 10, 15, .., 55
    let hcf = myMath.gcd([hrs*60, mins])
    return {
        qRatio: `${hrs} hrs : ${mins} min`, 
        noUnitsRatio: `${hrs*60}:${mins}`, commonUnit: 'minutes',
        ansRatio: `${hrs*60/hcf}:${mins/hcf}`, hcf
    }
}

const metricUnits1000 = [
    ['Kg', 'g'], ['Km', 'm'], ['L', 'mL'], ['m', 'mm']
]
const metric1000Data = () => {
    let [bigUnit, smallUnit] = rFuncs.randomElement(metricUnits1000);
    let eighths = rFuncs.randomInt(27) + 9 // 9,10, .. , 35
    let bigUnitValue = eighths * 0.125 // javascript always give accurate answer to times by 1/8
    let smallUnitValue = (rFuncs.randomInt(10) + 1) * 50 // 50, 100, .. 500
    let hcf = myMath.gcd([bigUnitValue*1000, smallUnitValue])
    return {
        qRatio: `${bigUnitValue} ${bigUnit} : ${smallUnitValue} ${smallUnit}`, 
        noUnitsRatio: `${bigUnitValue*1000}:${smallUnitValue}`, commonUnit: smallUnit,
        ansRatio: `${bigUnitValue*1000/hcf}:${smallUnitValue/hcf}`, hcf
    }
}

// this doesn't meet the requirement to be pure, 
// since the there is no function that can be called that will return the same result
// but this seemed simpler.
const simplifyWithUnits = () => {
    let qData = rFuncs.randomInt(2) ? metric1000Data() : hrsMinsData()
    return {
        qType: 'shortAnswer',
        q: `Simplify the ratio ${qData.qRatio}`, a: qData.ansRatio,
        hint: `Convert both measures into ${qData.commonUnit}`,
        giveAway: `If you convert both measures in the ratio to ${qData.commonUnit} you get the ratio ${qData.noUnitsRatio} which you still need to simplify`,
        qFeedback: `We can divide both numbers in ${qData.noUnitsRatio} by ${qData.hcf} to get ${qData.ansRatio}`
    }
}

module.exports = {simplifyWithUnits}