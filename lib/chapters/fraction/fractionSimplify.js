const rFuncs = require('../../nonQ/randFuncs');

const selector = {
    prime: (frac, m) => {
        let unSimp = frac.map(n => n * m);
        return {
            qType: 'shortAnswer',
            q: `Simplify ${unSimp.join('/')}`,
            hint: `Find a number that divides both ${unSimp.join(' and ')}`,
            giveAway: `Both ${unSimp.join(' and ')} are in the ${m} times table`,
            qFeedback: `${unSimp.join('/')} simplifies to ${frac.join('/')}`,
            a: frac.join('/')
        }
    },
    composite: (frac, m, ms) => {
        let unSimp = frac.map(n => n * m);
        return {
            qType: 'shortAnswer',
            q: `Simplify ${frac.map(n => n * m).join('/')}`,
            hint: `Find a number that divides both ${unSimp.join(' and ')}`,
            giveAway: `Both ${unSimp.join(' and ')} are in the ${m%10 === 0 ? 10 : ms[0]} times table`,
            qFeedback: `${unSimp.join('/')} simplifies to ${frac.join('/')}`,
            a: frac.join('/')
        }
    }
}

const multipliers = [
    [2], [3], [5], [7],
    [2, 2], [2, 3], [2, 2, 2], [3, 3], [2, 5], [2, 2, 3],
    [3, 5], [2, 3, 3], [2, 2, 5], [2, 2, 2, 3], [5, 5], [2, 3, 5]
];
const fractionSetup = (qName) => {
    if (selector[qName] === undefined) {
        return { q: 'Default fraction-simplify Q' }
    }
    const frac = rFuncs.randomCoprimePair().sort((a, b) => a - b);
    const ms = qName === 'prime' ? rFuncs.randomElement(multipliers.slice(0, 4)) : rFuncs.randomElement(multipliers.slice(4))
    const m = ms.reduce((acc, v) => acc * v, 1)
    return selector[qName](frac, m, ms)
}

module.exports = {
    sectionName: 'simplify',
    qGetter: fractionSetup
}