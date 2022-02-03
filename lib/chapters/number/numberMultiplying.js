const rFuncs = require('../../nonQ/randFuncs');

const selector = {
    'a0*b': (a, b) => {
        return {
            q: `What is ${a * 10} x ${b}`, a: a * 10 * b,
            hints: [
                `How is this related to ${a} x ${b}?`,
                `Start with ${a} x ${b} and add a zero`,
            ],
            qFeedback: `${a * 10} x ${b} = ${a * 10 * b}`,
            buildingBlocks: ['number-multiplying-tables2to9-45']
        }
    },
    'ab*c': (a, b, c) => {
        if (c === 1) { c++ }
        let left = a * 10 + b
        return {
            q: `What is ${left} x ${c}`, a: left * c,
            hints: [
                `Can you work out ${a * 10} x ${c} and ${b} x ${c} seperately?`,
                `${a * 10} x ${c} = ${a * 10 * c} and ${b} x ${c} = ${b * c}`,
            ],
            qFeedback: `${left} x ${c} = ${left * c}`,
            buildingBlocks: ['number-multiplying-a0*b-70']
        }
    },
    'ab*cd': (a, b, c, d) => {
        let left = a * 10 + b, right = c * 10 + d
        return {
            q: `What is ${left} x ${right}`, a: left * right,
            hints: [
                `Can you work out ${left} x ${c * 10} and ${left} x ${d} seperately?`,
                `${left} x ${c * 10} = ${left * c * 10} and ${left} x ${d} = ${left * d}`,
            ],
            qFeedback: `${left} x ${right} = ${left * right}`,
            buildingBlocks: ['number-multiplying-ab*c-90']
        }
    },
    'ab*c.d': (a, b, c, d) => {
        let left = a * 10 + b, right = c * 10 + d
        return {
            q: `What is ${left} x ${c}.${d}`, a: (left * right) / 10,
            hints: [
                'Can you do this without the decimal, and then put it back?',
                `${left} x ${right} = ${left * right}, but where does the decimal go?`,
            ],
            qFeedback: `${left} x ${right} = ${left * right}, then move the decimal back one place`,
            buildingBlocks: ['number-multiplying-ab*cd-95']
        }
    },
    cubeDigit: (a) => {
        return {
            q: `What is ${a} cubed?`, a: a * a * a,
            hints: [
                'Cubing a number means to times it by itself over and over. How many times?',
                `${a} cubed is ${a} x ${a} x ${a}`,
            ],
            qFeedback: `${a} x ${a} x ${a} = ${a * a} x ${a} = ${a * a * a}`,
            buildingBlocks: ['number-multiplying-ab*c-90']
        }
    },
    squareDigit: (a) => {
        return {
            q: `What is ${a} squared?`, a: a * a,
            hints: [
                'Squaring a number means to times it by itself',
                `${a} squared is ${a} x ${a}`,
            ],
            qFeedback: `${a} x ${a} = ${a * a}`,
            buildingBlocks: ['number-multiplying-tables2to9-45']
        }
    },
    squareEndIn1: (a) => {
        a = a * 10 + 1
        return {
            q: `What is ${a} squared?`, a: a * a,
            hints: [
                'Squaring a number means to times it by itself',
                `${a} squared is ${a} x ${a}`,
            ],
            qFeedback: `${a} x ${a} = ${a * a}`,
            buildingBlocks: ['number-multiplying-ab*cd-95']
        }
    },
    squareEndIn5: (a) => {
        a = a * 10 + 5
        return {
            q: `What is ${a} squared?`, a: a * a,
            hints: [
                'Squaring a number means to times it by itself',
                `${a} squared is ${a} x ${a}`,
            ],
            qFeedback: `${a} x ${a} = ${a * a}`,
            buildingBlocks: ['number-multiplying-ab*cd-95']
        }
    },
    tables2to9: (a, b) => {
        let min = Math.min(a, b), table = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(n => n * min)
        return {
            q: `What is ${a} x ${b}`, a: a * b,
            hints: [
                `You work out the ${min} times table by starting with ${min} and always adding ${min}`,
                `The ${min} times table is ${table.join(', ')}`,
            ],
            qFeedback: `${a} x ${b} = ${a * b}`,
            buildingBlocks: []
        }
    }
}

const multiplyingQ = (qName, d1, d2, d3, d4) => {
    if (selector[qName] === undefined) {
        return { q: 'default multiplying Q' }
    }
    let question = selector[qName](d1, d2, d3, d4)
    question.qType = 'shortAnswer'
    return question
}

const multiplyingSetup = (qName) => {
    let digit1 = rFuncs.randomInt(8) + 2, digit2 = rFuncs.randomInt(8) + 2
    let digit3 = rFuncs.randomInt(9) + 1, digit4 = rFuncs.randomInt(9) + 1
    return multiplyingQ(qName, digit1, digit2, digit3, digit4)
}

module.exports = {
    sectionName: 'multiplying',
    qGetter: multiplyingSetup
}