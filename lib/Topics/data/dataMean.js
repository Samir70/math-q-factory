const rFuncs = require('../../nonQ/randFuncs');
const myMath = require('../../nonQ/myMathFuncs');

const meanQ = (list, meanType) => {
    let q, a, qFeedback, hint, giveAway
    let total = list.reduce((a, b) => a + b, 0);
    if (meanType !== 'findMissing') {
        if (meanType !== 'anyAnswer' && total % list.length) {
            let extra = total % list.length;
            for (let i = 0; i < extra; i++) { list[i]--; total-- }
        }
        a = total / list.length;
        q = `Find the mean of ${list.join(', ')}`
        qFeedback = `The numbers add up to ${total}, and there are ${list.length} numbers. Mean is total / howMany`
        hint = 'What do the numbers add up to?'
        giveAway = 'The mean is total / howMany'
    } else {
        let targetMean = Math.ceil(total / (list.length + 1)) + 1
        let targetTotal = targetMean * (list.length + 1);
        a = targetTotal - total;
        q = `The mean of ${[...list, '??']} is ${targetMean}. Find the missing number.`
        qFeedback = `The given numbers add up to ${total}.\nWe need the total of all ${list.length + 1} numbers to be ${targetMean} x ${list.length + 1} = ${targetTotal}`
        hint = `What do we need the ${list.length + 1} numbers to add up to?`
        giveAway = `The total divided by ${list.length + 1} needs to be ${targetMean}. Find the total first.`
    }
    return {
        qType: 'shortAnswer',
        q, a, qFeedback, hint, giveAway,
        altAns: [Math.round(a), myMath.oneDecimal(a), myMath.twoDecimal(a)]
    }
}

const meanSetup = (meanType = 'intAnswer') => {
    if (!['intAnswer', 'anyAnswer', 'findMissing'].includes(meanType)) { meanType = 'intAnswer' }
    const howMany = rFuncs.randomInt(5) + 4; // 4, 5, 6, 7, 8
    let list = rFuncs.nRandomInts(howMany, 5, 30);
    return meanQ(list, meanType)
}

module.exports = {
    sectionName: 'mean',
    qGetter: meanSetup
}