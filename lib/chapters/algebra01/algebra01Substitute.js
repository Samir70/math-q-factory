const rFuncs = require('../../nonQ/randFuncs');

// '6a', '6+a', '6a+2b', '6aminus2b+5'
const selector = {
    '6a': ({ a, coef1 }) => {
        return {
            q: `Find ${coef1}a when a = ${a}`,
            a: coef1 * a,
        }
    },
    '6+a': ({ a, c }) => {
        return {
            q: `Find ${c} + a when a = ${a}`,
            a: c + a,
        }
    },
    '6a+2b': ({ a, coef1, b, coef2 }) => {
        return {
            q: `Find ${coef1}a + ${coef2}b when \na = ${a} and b = ${b}`,
            a: coef1 * a + coef2 * b,
        }
    },
    '6aminus2b+5': ({ a, b, c, coef1, coef2 }) => {
        return {
            q: `Find ${coef1}a - ${coef2}b ${c < 0 ? '-' : '+'} ${Math.abs(c)} when \na = ${a} and b = ${b}`,
            a: coef1 * a - coef2 * b + c,
        }
    }
}

const substituteSetup = (qName) => {
    if (selector[qName] === undefined) {
        return { q: 'Default algebra01-substitute- Q' }
    }
    let [a, b, c, coef1, coef2] = [0, 0, 0, 0, 0].map(n => rFuncs.randomInt(12) + 4).map((n, i) => i < 3 && rFuncs.randomInt(2) === 0 ? -n : n)
    return {
        qType: 'shortanswer',
        ...selector[qName]({ a, b, c, coef1, coef2 })
    }
}

module.exports = {
    sectionName: 'substitute',
    qGetter: substituteSetup
}