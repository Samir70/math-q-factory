const rFuncs = require('../../nonQ/randFuncs');

const medianQ = (list) => {
    let q = `Find the median of ${list.join(', ')}`
    list.sort((a, b) => a - b);
    let qFeedback, a
    if (list.length % 2) {
        let mid = (list.length - 1) / 2
        a = list[mid]
        qFeedback = `The number in the middle of ${list.join(', ')} is ${list[mid]}`
    } else {
        let mid = list.length / 2
        a = (list[mid - 1] + list[mid]) / 2
        qFeedback = `The numbers in the middle of ${list.join(', ')} are ${list[mid - 1]} and ${list[mid]}. \nThe number in the middle of those is ${a}`
    }
    return {
        qType: 'shortAnswer',
        hints: [
            'Median sounds a bit like "medium"',
            'Put in order; find the middle',
        ],
        qFeedback, q, a
    }
}

const medianSetup = (parity) => {
    let howMany = 2 * (rFuncs.randomInt(3) + 2); // 4, 6, 8
    howMany += parity === 'odd' ? 1 : 0
    let list = rFuncs.nRandomInts(howMany, 50, 5)
    return medianQ(list)
}

// const medianQ = (t) => {
//     const howMany = RandomInt(3) + 2;
//     var listLength = t === 'ODD' ? howMany * 2 + 1 : howMany * 2;
//     var list = nRandomInts(listLength, 15).map(x => x + 3);
//     var q = 'Find the median of ' + list.join(', ');
//     var sortedList = list.sort((a, b) => a - b);
//     var a = t === 'ODD' ? sortedList[howMany] : (sortedList[howMany - 1] + sortedList[howMany]) / 2
//     return { q, a }
// }

// this needs to be imported into a sectionList file
// eg: mean would be part of the dataSectionList
module.exports = {
    sectionName: 'median',
    qGetter: medianSetup
}