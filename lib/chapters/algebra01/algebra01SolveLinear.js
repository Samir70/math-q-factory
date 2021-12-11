const rFuncs = require('../../nonQ/randFuncs');
const { makeExpression } = require('../../nonQ/formatFuncs');

// 'oneStep', 'twoStep', 'brackets', '', 'fraction'
const selector = {
    qName1: () => {
        return {
            q: 'Default algebra01-solveLinear-qName1 question',
            a: 42,
        }
    },
    unknownBothSides: ({ coef1, coef2, letter, letterValue, value }) => {
        if (coef1 === coef2) {coef2++}
        let v2 = letterValue*(coef1 - coef2) + value;
        let smallest = Math.min(coef1, coef2);
        let verbs = smallest < 0 ? ['Add', 'adding'] : ['Take', 'taking']
        let lhs = coef1 < 0 ? makeExpression([value, coef1], ['', letter]) : makeExpression([coef1, value], [letter, ''])
        let rhs = coef2 < 0 ? makeExpression([v2, coef2], ['', letter]) : makeExpression([coef2, v2], [letter, ''])
        return {
            qType: 'shortAnswer',
            q: `Find ${letter} if \n${lhs} = ${rhs}`,
            a: letterValue,
            hint: `This would be easier if all the ${letter}'s were on one side`,
            giveAway: `${verbs[0]} ${Math.abs(smallest) === 1 ? 'an '+letter : Math.abs(smallest)+letter+"'s"} ${smallest < 0 ? 'to' : 'from'} both sides`,
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