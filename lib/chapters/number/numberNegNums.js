const rFuncs = require('../../nonQ/randFuncs');

const negNumsSelector = {
    add: (x, y) => {
        return {
            q: `What is ${x} + ${y}?`,
            a: x + y,
        }
    },
    sub: (x, y) => {
        return {
            q: `What is ${x} - ${y}?`,
            a: x - y,
        }
    },
    times: (x, y) => {
        return {
            q: `What is ${x} x ${y}?`,
            a: x*y,
        }
    },
    divide: (x, y) => {
        return {
            q: `What is ${x*y} divided by ${x}?`,
            a: y,
        }
    }
}

const negNumsSetup = (qName) => {
    let x = rFuncs.randomInt(12) + 5, y = rFuncs.randomInt(12) + 5;
    // x and y are 5..16
    switch (rFuncs.randomInt(3)) {
        case 0: { x = -x; break }
        case 1: { y = -y; break }
        default: { x = -x; y = -y }
    }
    if (negNumsSelector[qName] === undefined) {
        return { q: 'Default number-negNums- Q' }
    }
    return negNumsSelector[qName](x, y)
}

module.exports = {
    sectionName: 'negNums',
    qGetter: negNumsSetup
}