const rFuncs = require('../../nonQ/randFuncs');
const { stndrdth } = require('../../nonQ/formatFuncs');

const selector = {
    findNextTerm: ({ diff, first6 }) => {
        return {
            qType: 'shortAnswer',
            q: `Find the next term in \n${first6.slice(0, 5).join(', ')}`,
            a: first6[5],
            hint: `What do you ${diff < 0 ? 'take away' : 'add'} to get from one term to the next?`,
            giveAway: `The sequence goes ${diff < 0 ? 'down' : 'up'} by ${Math.abs(diff)} each time.`,
            qFeedback: `The next term is ${first6[5]}`
        }
    },
    giveTermToTermRule: ({ diff, first6 }) => {
        return {
            qType: 'shortAnswer',
            q: `What is the term-to-term rule for \n${first6.join(', ')}`,
            a: `${diff < 0 ? 'take' : 'add'} ${Math.abs(diff)}`,
            hint: `What do you have to do to get from one number tot he next in the sequence?`,
            giveAway: `The sequence goes ${diff < 0 ? 'down' : 'up'} by ${Math.abs(diff)} each time.`,
            qFeedback: `${diff < 0 ? 'take' : 'add'} ${Math.abs(diff)} to get from term to term`
        }
    },
    useFormula1to5: ({ diff, first6, nthTerm }) => {
        return {
            qType: 'shortAnswer',
            q: `Find the first 5 terms in the sequence with formula \n${nthTerm}`,
            a: first6.slice(0, 5).join(', '),
            hint: `You can find the first term by letting n = 1`,
            giveAway: `The sequence starts on ${first6[0]} and goes ${diff < 0 ? 'down' : 'up'} by ${Math.abs(diff)} each time`,
            qFeedback: `The formula ${nthTerm} gives the sequence ${first6.slice(0, 5).join(', ')}`
        }
    },
    useFormula100s: ({ first6, nthTerm, target, targetValue }) => {
        return {
            qType: 'shortAnswer',
            q: `Find the ${target + stndrdth(target)} term of the sequence that starts \n${first6}`,
            a: targetValue,
            hint: `Find the nth term formula for the sequence`,
            giveAway: `The nth term formula for this sequence is \n${nthTerm}`,
            qFeedback: `The ${target + stndrdth(target)} is ${targetValue}`
        }
    },
    findFormula: ({ first6, nthTerm, diff, prior }) => {
        return {
            qType: 'shortAnswer',
            q: `Find the nth term formula for the sequence \n${first6.join(', ')}`,
            a: nthTerm,
            hint: `One method uses the '0th' term, to the left of the sequence, and the difference from term to term`,
            giveAway: `The difference between terms is ${diff}, and the '0th' term is ${prior}`,
            qFeedback: `${first6.join(', ')} has nth term formula ${nthTerm}`
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