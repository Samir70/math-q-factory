const rFuncs = require('../../nonQ/randFuncs');
const { makeExpression } = require('../../nonQ/formatFuncs');

// 'twoStep', 'brackets', '', ''
const selector = {
    oneStepMult: ({ coef1, letter, letterValue }) => {
        let lhs = makeExpression([coef1], [letter])
        let rhs = coef1 * letterValue
        return {
            qType: 'shortAnswer',
            q: `Find ${letter} if \n ${lhs} = ${rhs}`,
            a: letterValue,
            hint: `What is the opposite of timesing by ${coef1}?`,
            giveAway: `Divide by ${coef1}`,
            qFeedback: `${coef1} times ${letterValue} = ${rhs} so ${letter} is ${letterValue}`
        }
    },
    oneStepAdd: ({ coef1, letter, letterValue, value }) => {
        coef1 = coef1 < 0 ? -1 : 1
        let lhs = coef1 < 0 ? makeExpression([value, coef1], ['', letter]) : makeExpression([coef1, value], [letter, ''])
        let rhs = coef1 < 0 ? value - letterValue : value + letterValue
        return {
            qType: 'shortAnswer',
            q: `Find ${letter} if \n ${lhs} = ${rhs}`,
            a: letterValue,
            hint: `Think of the letter ${letter} as being a box to put a value into.`,
            giveAway: `Do you know that adding and taking are opposites?`,
            qFeedback: `${letter} is ${letterValue}`
        }
    },
    twoStep1: ({ coef1, letter, letterValue, value }) => {
        coef1 = Math.abs(coef1);
        if (coef1 === 1) { coef1++ }
        let lhs = makeExpression([coef1, value], [letter, '']);
        let rhs = (coef1 * letterValue) + value;
        return {
            qType: 'shortAnswer',
            q: `Find ${letter} if \n${lhs} = ${rhs}`,
            a: letterValue,
            hint: `What is the opposite of ${value < 0 ? 'taking' : 'adding'} ${Math.abs(value)}?`,
            giveAway: `After ${value > 0 ? 'taking ' + Math.abs(value) + ' from' : 'adding ' + Math.abs(value) + ' to'} both sides we get ${makeExpression([coef1], [letter])} = ${coef1 * letterValue}`,
            qFeedback: `${letter} is ${letterValue}`
        }
    },
    twoStep2: ({ coef1, letter, letterValue, value }) => {
        coef1 = -Math.abs(coef1);
        if (coef1 === -1) { coef1-- }
        let lhs = makeExpression([value, coef1], ['', letter]);
        let rhs = (coef1 * letterValue) + value;
        return {
            qType: 'shortAnswer',
            q: `Find ${letter} if \n${lhs} = ${rhs}`,
            a: letterValue,
            hint: `What do you take from ${value} to get ${rhs}?`,
            giveAway: `You need to take ${Math.abs(coef1) * letterValue} from ${value} to get ${rhs}`,
            qFeedback: `${letter} is ${letterValue}`
        }
    },
    unknownBothSides: ({ coef1, coef2, letter, letterValue, value }) => {
        if (coef1 === coef2) { coef2++ }
        let v2 = letterValue * (coef1 - coef2) + value;
        let smallest = Math.min(coef1, coef2);
        let verbs = smallest < 0 ? ['Add', 'adding'] : ['Take', 'taking']
        let lhs = coef1 < 0 ? makeExpression([value, coef1], ['', letter]) : makeExpression([coef1, value], [letter, ''])
        let rhs = coef2 < 0 ? makeExpression([v2, coef2], ['', letter]) : makeExpression([coef2, v2], [letter, ''])
        return {
            qType: 'shortAnswer',
            q: `Find ${letter} if \n${lhs} = ${rhs}`,
            a: letterValue,
            hint: `This would be easier if all the ${letter}'s were on one side`,
            giveAway: `${verbs[0]} ${Math.abs(smallest) === 1 ? 'an ' + letter : Math.abs(smallest) + letter + "'s"} ${smallest < 0 ? 'to' : 'from'} both sides`,
            qFeedback: `${letter} is ${letterValue}`
        }
    },
    fraction: ({ coef1, letter, letterValue, value }) => {
        // set up (ax + b) / (cx + d) where a = coef1, d = value and c = coef2
        let coef2 = coef1 + rFuncs.randomInt(3) + 1; // to help limit the size of d
        if (coef2 === 0) { console.log('had a zero on the bottom!') }
        let ratio = (Math.abs(value) % 3) + 2; // so top/bottom aims to be 2, 3 or 4
        let b = ratio * (coef2 * letterValue + value) - (coef1 * letterValue)
        let top = coef1 < 0 ? makeExpression([b, coef1], ['', letter]) : makeExpression([coef1, b], [letter, ''])
        let bottom = coef2 < 0 ? makeExpression([value, coef2], ['', letter]) : makeExpression([coef2, value], [letter, ''])
        return {
            qType: 'shortAnswer',
            q: `Find ${letter} if \n ${top}/${bottom} = ${ratio}`,
            a: letterValue,
            hint: `Simplify the problem by timesing both sides by the denominator`,
            giveAway: `After timesing both sides by ${bottom}, the question becomes ${top} = ${ratio}(${bottom})`,
            qFeedback: `${letter} is ${letterValue}`
        }
    }
}

const solveLinearSetup = (qName) => {
    if (selector[qName] === undefined) {
        return { q: 'Default algebra01-solveLinear- Q' }
    }
    return selector[qName]({
        coef1: (rFuncs.randomInt(2) === 0 ? 1 : -1) * (rFuncs.randomInt(8) + 1), // + or -[1..8]
        coef2: (rFuncs.randomInt(2) === 0 ? 1 : -1) * (rFuncs.randomInt(8) + 1), // + or -[1..8]
        letter: rFuncs.randomElement([...'aehimnrsx']), // need 'an' before saying them
        letterValue: (rFuncs.randomInt(2) === 0 ? 1 : -1) * (rFuncs.randomInt(8) + 1), // + or -[1..8]
        value: (rFuncs.randomInt(2) === 0 ? 1 : -1) * (rFuncs.randomInt(20) + 3)
    })
}

module.exports = {
    sectionName: 'solveLinear',
    qGetter: solveLinearSetup
}