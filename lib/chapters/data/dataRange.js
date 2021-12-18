const rFuncs = require('../../nonQ/randFuncs');

const rangeQ = (list) => {
    let max = Math.max(...list), min = Math.min(...list);
    return {
        qType: 'shortAnswer',
        q: 'Find the range of ' + list.join(', '),
        a: max - min,
        hints: [
            "Two numbers in the list are important for working out the range.",
            "Range is the difference between the largest and smallest"
        ],
        qFeedback: `The difference between the largest and smallest numbers in the list is ${max} - ${min} = ${max - min}`
    }
}

const rangeSetup = () => {
    const howMany = rFuncs.randomInt(6) + 4; // 4, 5, 6, 7, 8, 9
    const max = rFuncs.randomInt(30) + 20, min = rFuncs.randomInt(5) + 1
    var list = rFuncs.nRandomInts(howMany, max, min)
    return rangeQ(list);
}

module.exports = {
    sectionName: 'range',
    qGetter: rangeSetup
}