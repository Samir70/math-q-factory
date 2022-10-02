const rFuncs = require('../../nonQ/randFuncs');
const { makeExpression } = require('../../nonQ/formatFuncs');

const selector = {
    oneStepMult: ({ coef1, letter, letterValue }) => {
        if (coef1 === 1) { coef1++ }
        let lhs = makeExpression([coef1], [letter])
        let rhs = coef1 * letterValue
        return {
            qType: 'shortAnswer',
            q: `Find ${letter} if \n ${lhs} = ${rhs}`,
            a: letterValue,
            hints: [
                `What is the opposite of timesing by ${coef1}?`,
                `Divide by ${coef1}`
            ],
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
            hints: [
                `Think of the letter ${letter} as being a box to put a value into.`,
                `Do you know that adding and taking are opposites?`
            ],
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
            hints: [
                `What is the opposite of ${value < 0 ? 'taking' : 'adding'} ${Math.abs(value)}?`,
                `After ${value > 0 ? 'taking ' + Math.abs(value) + ' from' : 'adding ' + Math.abs(value) + ' to'} both sides we get ${makeExpression([coef1], [letter])} = ${coef1 * letterValue}`
            ],
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
            hints: [
                `What do you take from ${value} to get ${rhs}?`,
                `You need to take ${Math.abs(coef1) * letterValue} from ${value} to get ${rhs}`
            ],
            qFeedback: `${letter} is ${letterValue}`
        }
    },
    brackets: ({ coef1, coef2, letter, letterValue, value }) => {
        coef2 = Math.abs(coef2) + 1
        let inbrackets = coef1 < 0 ? makeExpression([value, coef1], ['', letter]) : makeExpression([coef1, value], [letter, ''])
        let lhs = `${coef2}(${inbrackets})`
        let bracketsVal = (coef1 * letterValue + value);
        let rhs = coef2 * bracketsVal
        return {
            qType: 'shortAnswer',
            q: `Find ${letter} if \n${lhs} = ${rhs}`,
            a: letterValue,
            hints: [
                `What do you times by ${coef2} to get ${rhs}`,
                `${coef2} x ${bracketsVal} = ${rhs} so ${inbrackets} = ${bracketsVal}`
            ],
            qFeedback: `${letter} is ${letterValue}`
        }
    },
    unknownBothSides: ({ coef1, coef2, letter, letterValue, value }) => {
        if (coef1 === coef2) { coef2++ }
        let v2 = letterValue * (coef1 - coef2) + value;
        let smallest = Math.min(coef1, coef2);
        let verbs = smallest < 0 ? ['Add', 'adding'] : ['Take', 'taking']
        let anXto = Math.abs(smallest) === 1 ? 'an ' + letter : Math.abs(smallest) + letter + "'s"
        anXto += smallest < 0 ? ' to' : ' from'
        let lhs = coef1 < 0 ? makeExpression([value, coef1], ['', letter]) : makeExpression([coef1, value], [letter, ''])
        let rhs = coef2 < 0 ? makeExpression([v2, coef2], ['', letter]) : makeExpression([coef2, v2], [letter, ''])
        let allOnOneSide = coef1 < coef2 ? value + " = " + makeExpression([coef2 - coef1, v2], [letter, '']) : makeExpression([coef1 - coef2, value], [letter, '']) + ' = ' + v2
        return {
            qType: 'shortAnswer',
            q: `Find ${letter} if \n${lhs} = ${rhs}`,
            a: letterValue,
            hints: [
                `This would be easier if all the ${letter}'s were on one side`,
                `${verbs[0]} ${anXto} both sides`,
                `After ${verbs[1]} ${anXto} both sides we get: ${allOnOneSide}`,
                `If you don't know how to continue, try practising those kinds of questions in one of the building blocks.`
            ],
            qFeedback: `${letter} is ${letterValue}`
        }
    },
    fraction: ({ coef1, letter, letterValue, value }) => {
        // set up (ax + b) / (cx + d) where a = coef1, d = value and c = coef2
        let coef2 = coef1 + rFuncs.randomInt(3) + 1; // to help limit the size of d
        if (coef2 === 0) { coef2++ }
        let ratio = (Math.abs(value) % 3) + 2; // so top/bottom aims to be 2, 3 or 4
        if (coef2 * ratio === coef1) { ratio++; console.log('solveLinear-fraction -- avoided unsolvable') }
        let b = ratio * (coef2 * letterValue + value) - (coef1 * letterValue)
        let top = coef1 < 0 ? makeExpression([b, coef1], ['', letter]) : makeExpression([coef1, b], [letter, ''])
        let bottom = coef2 < 0 ? makeExpression([value, coef2], ['', letter]) : makeExpression([coef2, value], [letter, ''])
        return {
            qType: 'shortAnswer',
            q: `Find ${letter} if \n (${top})/(${bottom}) = ${ratio}`,
            a: letterValue,
            hints: [
                `Simplify the problem by timesing both sides by the denominator`,
                `After timesing both sides by ${bottom}, the question becomes ${top} = ${ratio}(${bottom})`
            ],
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
        letter: rFuncs.randomElement([...'aehimnrx']), // need 'an' before saying them
        letterValue: (rFuncs.randomInt(2) === 0 ? 1 : -1) * (rFuncs.randomInt(8) + 1), // + or -[1..8]
        value: (rFuncs.randomInt(2) === 0 ? 1 : -1) * (rFuncs.randomInt(20) + 3)
    })
}

module.exports = {
    sectionName: 'solveLinear',
    qGetter: solveLinearSetup
}