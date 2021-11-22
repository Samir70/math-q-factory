const rFuncs = require('../../nonQ/randFuncs');

const signWord = (n) => n < 0 ? 'negative' : 'positive' // n is not zero in these Qs
const negNumsSelector = {
    add: (x, y) => {
        return {
            q: `What is ${x} + ${y}?`,
            a: x + y,
            hint: `It is ${x < 0 ? 'cold' : 'warm'} and we are adding ${y < 0 ? 'cold' : 'heat'} so the temperature will...`,
            giveAway: `On a number line, start at ${x} and go ${y < 0 ? 'down' : 'up'} ${Math.abs(y)} steps`,
            qFeedback: `${x} + ${y} = ${x + y}`
        }
    },
    sub: (x, y) => {
        return {
            q: `What is ${x} - ${y}?`,
            a: x - y,
            hint: `It is ${x < 0 ? 'cold' : 'warm'} and we are taking ${y < 0 ? 'cold' : 'heat'} so the temperature will...`,
            giveAway: `On a number line, start at ${x} and go ${y < 0 ? 'up' : 'down'} ${Math.abs(y)} steps`,
            qFeedback: `${x} - ${y} = ${x - y}`
        }
    },
    times: (x, y) => {
        return {
            q: `What is ${x} x ${y}?`,
            a: x * y,
            hint: `Start by working out ${Math.abs(x)} x ${Math.abs(y)}`,
            giveAway: `${signWord(x)} times ${signWord(y)} gives a ${signWord(x * y)}`,
            qFeedback: `${x} x ${y} = ${x * y}`
        }
    },
    divide: (x, y) => {
        return {
            q: `What is ${x * y} divided by ${x}?`,
            a: y,
            hint: `Start by working out ${Math.abs(x * y)} divided by ${Math.abs(x)}`,
            giveAway: `${signWord(x * y)} divided by ${signWord(x)} gives a ${signWord(y)}`,
            qFeedback: `${x * y} divided by ${x} = ${y}`
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
    return { qType: 'shortAnswer', ...negNumsSelector[qName](x, y) }
}

module.exports = {
    sectionName: 'negNums',
    qGetter: negNumsSetup
}