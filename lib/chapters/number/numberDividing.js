const rFuncs = require('../../nonQ/randFuncs');

const selector = {
    tables2to9: (a, b) => {
        let table = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(n => n * b)
        return {
            q: `What is ${a * b} / ${b}`, a: a,
            hints: [
                `Can you find ${a * b} in the ${b} times table?`,
                `The ${b} times table is ${table.join(', ')}`
            ],
            qFeedback: `${a * b} / ${b} = ${a}`,
            buildingBlocks: ['number-multiplying-tables2to9-45']
        }
    },
    tablesWithRemainder: (a, b, leftOver, person) => {
        let table = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(n => n * b)
        return {
            q: `${person} shares ${a * b + leftOver} sweets among ${b} people. How many are left over?`,
            a: leftOver,
            hints: [
                `What is the biggest number less than ${a * b + leftOver} in the ${b} times table?`,
                `The ${b} times table is ${table.join(', ')}.`,
                `${a * b} is the biggest number less than ${a * b + leftOver} in the ${b} times table`,
                `We can share ${a * b} of the ${a * b + leftOver} sweets and give everyone the same. How many are left over?`
            ],
            qFeedback: `${a * b + leftOver} / ${b} = ${a} with ${leftOver} left over.`,
            buildingBlocks: ['number-dividing-tables2to9-60']
        }
    }
}

const dividingQ = (qName, a, b, leftOver, person) => {
    if (selector[qName] === undefined) {
        return { q: 'default dividing Q' }
    }
    let question = selector[qName](a, b, leftOver, person)
    question.qType = 'shortAnswer'
    return question
}

const dividingSetup = (qName) => {
    let a = rFuncs.randomInt(8) + 2, b = rFuncs.randomInt(8) + 2
    let leftOver = rFuncs.randomInt(b - 1) + 1
    let person = rFuncs.randomNames(1)[0]
    return dividingQ(qName, a, b, leftOver, person)
}

module.exports = {
    sectionName: 'dividing',
    qGetter: dividingSetup
}