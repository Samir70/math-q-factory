const rFuncs = require('../../nonQ/randFuncs');
const { wrapMJax } = require('../../nonQ/formatFuncs');

const selector = {
    times: (base, power1, power2) => {
        if (power1 === 2 && power2 === 2) { power1++ }
        let exp = wrapMJax(`${base}^${power1} xx ${base}^${power2}`)
        let ans = wrapMJax(`${base}^${power1 + power2}`)
        return {
            q: `Simplify ${exp}`,
            a: ans,
            wrongOptions: [
                wrapMJax(`${base * base}^${power1 + power2}`),
                wrapMJax(`${base + base}^${power1 + power2}`),
                wrapMJax(`${base}^${power1 * power2}`)
            ],
            hints: [
                'Remember that index notation is shorthand for repeated multiplying',
                `How many ${base}'s are being multiplied together?`,
                `Add the little numbers`
            ],
            qFeedback: `${exp} simplifies to ${ans}`
        }
    },
    divide: (base, power1, power2) => {
        if (power1 === power2) { power1 += 1 }
        let exp = wrapMJax(`${base}^${power1} -: ${base}^${power2}`)
        let ans = power1 - power2 === 1 ? base : wrapMJax(`${base}^${power1 - power2}`)
        return {
            q: `Simplify ${exp}`,
            a: ans,
            wrongOptions: [
                wrapMJax(`1^${power1 - power2}`),
                wrapMJax(`${base}^${power1 + power2}`),
                wrapMJax(`${1}^${power1 + power2}`)
            ],
            hints: [
                'This is similar to simplifying multiplication of powers',
                `Dividing is the opposite of multiplying, so do the opposite with the little numbers`,
                `Subtract the little numbers`
            ],
            qFeedback: `${exp} simplifies to ${ans}`
        }
    },
    brackets: (base, power1, power2) => {
        if (power1 === 2 && power2 === 2) { power1++ }
        let exp = wrapMJax(`(${base}^${power1})^${power2}`)
        let ans = wrapMJax(`${base}^${power1 * power2}`)
        return {
            q: `Simplify ${exp}`,
            a: ans,
            wrongOptions: [
                wrapMJax(`${base**2}^${power1 + power2}`),
                wrapMJax(`${base**2}^${power1 * power2}`),
                wrapMJax(`${base}^${power1 + power2}`),
            ],
            hints: [
                `The part in brackets is being multiplied by itself ${power2} times`,
                `Either expand the expression to see it without brackets or look for another shortcut`,
                `Multiply the little numbers`
            ],
            qFeedback: `${exp} simplifies to ${ans}`
        }
    }
}

const sectionSetup = (qName) => {
    if (selector[qName] === undefined) {
        return { q: 'Default powers-simplify- Q' }
    }
    let base = rFuncs.randomInt(7) + 3
    let [power1, power2] = [0, 0].map(x => rFuncs.randomInt(6) + 2)
    return {
        qType: 'multiChoice',
        ...selector[qName](base, power1, power2)
    }
}

module.exports = {
    sectionName: 'simplify',
    qGetter: sectionSetup
}