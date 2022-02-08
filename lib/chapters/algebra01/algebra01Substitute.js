const rFuncs = require('../../nonQ/randFuncs');

// '6a', '6+a', '6a+2b', '6aminus2b+5'
const selector = {
    '6a(positive)': ({ a, coef1 }) => {
        a = Math.abs(a);
        return {
            q: `Find ${coef1}a when a = ${a}`,
            a: coef1 * a,
            hints: [
                `Suppose you're buying ${coef1} apples that each cost ${a}`
            ],
            buildingBlocks: ['number-multiplying-tables2to9-45'],
            qFeedback: `${coef1}a = ${coef1} x ${a} = ${coef1 * a}`
        }
    },
    '6a(negative)': ({ a, coef1 }) => {
        if (a > 0) { a = -a }
        return {
            q: `Find ${coef1}a when a = ${a}`,
            a: coef1 * a,
            hints: [
                `Would you know what to do if a wasn't negative?`,
                `${coef1}a is ${coef1} times the value of a`
            ],
            buildingBlocks: ['algebra01-substitute-6a(positive)-60'],
            qFeedback: `${coef1}a = ${coef1} x ${a} = ${coef1 * a}`
        }
    },
    '6+a': ({ a, c }) => {
        return {
            q: `Find ${c} + a when a = ${a}`,
            a: c + a,
            hints: [`Just swap the value of a into the expression`, `Work out ${c} + ${a}`],
            qFeedback: `${c} + ${a} = ${c + a}`
        }
    },
    '6a+2b': ({ a, coef1, b, coef2 }) => {
        return {
            q: `Find ${coef1}a + ${coef2}b when \na = ${a} and b = ${b}`,
            a: coef1 * a + coef2 * b,
            hints: [
                `Work out the ${coef1}a and ${coef2}b seperately`,
                `${coef1}a is ${coef1} times the value of a`,
                `${coef1}a = ${coef1} x ${a} = ${coef1 * a} \nNow work out ${coef2}b`
            ],
            qFeedback: `${coef1}a + ${coef2}b = ${coef1 * a + coef2 * b}`,
            buildingBlocks: ['algebra01-substitute-6a(negative)-90']
        }
    },
    '6aminus2b+5': ({ a, b, c, coef1, coef2 }) => {
        return {
            q: `Find ${coef1}a - ${coef2}b ${c < 0 ? '-' : '+'} ${Math.abs(c)} when \na = ${a} and b = ${b}`,
            a: coef1 * a - coef2 * b + c,
            hints: [
                `Work out the ${coef1}a and ${coef2}b seperately`,
                `${coef1}a is ${coef1} times the value of a`,
                `${coef1}a = ${coef1} x ${a} = ${coef1 * a} \nNow work out ${coef2}b`
            ],
            qFeedback: `${coef1}a - ${coef2}b ${c < 0 ? '-' : '+'} ${Math.abs(c)} = ${coef1 * a - coef2 * b + c}`,
            buildingBlocks: ['algebra01-substitute-6a(negative)-90']
        }
    }
}

const substituteSetup = (qName) => {
    if (selector[qName] === undefined) {
        return { q: 'Default algebra01-substitute- Q' }
    }
    let [a, b, c, coef1, coef2] = [0, 0, 0, 0, 0].map(n => rFuncs.randomInt(12) + 4).map((n, i) => i < 3 && rFuncs.randomInt(2) === 0 ? -n : n)
    return {
        qType: 'shortAnswer',
        ...selector[qName]({ a, b, c, coef1, coef2 })
    }
}

module.exports = {
    sectionName: 'substitute',
    qGetter: substituteSetup
}