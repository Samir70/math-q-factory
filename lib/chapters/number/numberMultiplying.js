const rFuncs = require('../../nonQ/randFuncs');

const selector = {
    tables2to9: (a, b) => {
        return {
            q: `What is ${a} x ${b}`, a: a * b
        }
    },
    'a0*b': (a, b) => {
        a = a * 10
        return {
            q: `What is ${a} x ${b}`, a: a * b
        }
    },
    'ab*c': (a, b, c) => {
        if (c === 1) { c++ }
        let left = a * 10 + b
        return {
            q: `What is ${left} x ${c}`, a: left * c
        }
    },
    'ab*cd': (a, b, c, d) => {
        let left = a * 10 + b, right = c * 10 + d
        return {
            q: `What is ${left} x ${right}`, a: left * right
        }
    },
    'ab*c.d': (a, b, c, d) => {
        let left = a * 10 + b, right = c * 10 + d
        return {
            q: `What is ${left} x ${c}.${d}`, a: (left * right) / 10
        }
    },
    cubeDigit: (a) => {
        return {
            q: `What is ${a} cubed?`, a: a * a * a
        }
    },
    squareDigit: (a) => {
        return {
            q: `What is ${a} squared?`, a: a * a
        }
    },
    squareEndIn1: (a) => {
        a = a * 10 + 1
        return {
            q: `What is ${a} squared?`, a: a * a
        }
    },
    squareEndIn5: (a) => {
        a = a * 10 + 5
        return {
            q: `What is ${a} squared?`, a: a * a
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