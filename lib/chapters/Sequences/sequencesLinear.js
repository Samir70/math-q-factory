const rFuncs = require('../../nonQ/randFuncs');
const { stndrdth } = require('../../nonQ/formatFuncs');

const selector = {
    findNextTerm: ({ diff, first6 }) => {
        return {
            qType: 'shortAnswer',
            q: `Find the next term in \n${first6.slice(0, 5).join(', ')}`,
            a: first6[5],
            hints: [
                `What do you ${diff < 0 ? 'take away' : 'add'} to get from one term to the next?`,
                `The sequence goes ${diff < 0 ? 'down' : 'up'} by ${Math.abs(diff)} each time.`,
            ],
            buildingBlocks: [],
            qFeedback: `The next term is ${first6[5]}`
        }
    },
    giveTermToTermRule: ({ diff, first6 }) => {
        return {
            qType: 'shortAnswer',
            q: `What is the term-to-term rule for \n${first6.join(', ')}`,
            a: `${diff < 0 ? 'take' : 'add'} ${Math.abs(diff)}`,
            hints: [
                `What do you have to do to get from one number to the next in the sequence?`,
                `The sequence goes ${diff < 0 ? 'down' : 'up'} by ${Math.abs(diff)} each time.`,
            ],
            buildingBlocks: [],
            qFeedback: `${diff < 0 ? 'take' : 'add'} ${Math.abs(diff)} to get from term to term`
        }
    },
    useFormulaTimesTables: ({ diff }) => {
        diff = Math.abs(diff);
        let ans = [1, 2, 3, 4, 5].map(n => n * diff).join(', ')
        return {
            qType: 'shortAnswer',
            q: `Find the first 5 terms in the sequence with formula \n${diff}n`,
            a: ans,
            hints: [
                `${diff}n means ${diff} times a number`,
                `If you wanted to find the 10th number in the sequence, you would do \n10 x ${diff} = ${10 * diff}`,
                `You just need the first 5 terms of the ${diff} times table`
            ],
            buildingBlocks: ['algebra01-substitute-6a(positive)-60'],
            qFeedback: `The first five terms of ${diff}n are ${ans}`
        }
    },
    useFormula1to5: ({ diff, first6, nthTerm }) => {
        return {
            qType: 'shortAnswer',
            q: `Find the first 5 terms in the sequence with formula \n${nthTerm}`,
            a: first6.slice(0, 5).join(', '),
            hints: [
                `You can find the first term by letting n = 1`,
                `The sequence starts on ${first6[0]} and goes ${diff < 0 ? 'down' : 'up'} by ${Math.abs(diff)} each time`,
            ],
            buildingBlocks: ['sequences-linear-useFormulaTimesTables-110'],
            qFeedback: `The formula ${nthTerm} gives the sequence ${first6.slice(0, 5).join(', ')}`
        }
    },
    useFormula100s: ({ first6, nthTerm, target, targetValue }) => {
        return {
            qType: 'shortAnswer',
            q: `Find the ${target + stndrdth(target)} term of the sequence that starts \n${first6}`,
            a: targetValue,
            hints: [
                `Find the nth term formula for the sequence`,
                `The nth term formula for this sequence is \n${nthTerm}`,
            ],
            qFeedback: `The ${target + stndrdth(target)} is ${targetValue}`,
            buildingBlocks: ['sequences-linear-findFormula-250']
        }
    },
    findFormula: ({ first6, nthTerm, diff, prior }) => {
        return {
            qType: 'shortAnswer',
            q: `Find the nth term formula for the sequence \n${first6.join(', ')}`,
            a: nthTerm,
            hints: [
                `One method uses the '0th' term, to the left of the sequence, and the difference from term to term`,
                `The difference between terms is ${diff}, and the '0th' term is ${prior}`,
            ],
            qFeedback: `${first6.join(', ')} has nth term formula ${nthTerm}`,
            buildingBlocks: ['sequences-linear-useFormula1to5-180']
        }
    }
}

const linearSetup = (qName) => {
    if (selector[qName] === undefined) {
        return { q: 'Default sequences-linear- Q' }
    }
    let diff = rFuncs.randomInt(10) + 3, prior = rFuncs.randomInt(16) + 7;
    diff *= rFuncs.randomInt(3) === 0 ? -1 : 1
    let first6 = [1, 2, 3, 4, 5, 6].map(n => prior + n * diff)
    let nthTerm = diff < 0 ? `${prior} - ${Math.abs(diff)}n` : `${diff}n + ${prior}`
    let target = rFuncs.randomInt(500) + 100
    let targetValue = prior + target * diff;
    return selector[qName]({ diff, prior, first6, nthTerm, target, targetValue })
}

module.exports = {
    sectionName: 'linear',
    qGetter: linearSetup
}