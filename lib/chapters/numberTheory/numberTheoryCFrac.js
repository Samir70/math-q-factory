const rFuncs = require('../../nonQ/randFuncs');
const myMaths = require('../../nonQ/myMathFuncs');
const { cFracFormat } = require('../../nonQ/formatFuncs');

const selector = {
    rational: ({top, bottom, cFrac}) => {
        let frac = [top, bottom].join('/')
        return {
            qType: 'shortAnswer',
            q: `Find the continued fraction for ${frac}`,
            a: cFracFormat(cFrac),
            hint: top > bottom ? `Write the fraction as a mixed number. The first partial quotient is the whole part` : `Because the fraction is less than one, the first part partial quotient is zero`,
            giveAway: 'http://www.maths.surrey.ac.uk/hosted-sites/R.Knott/Fibonacci/cfINTRO.html',
            qFeedback: `${cFracFormat(cFrac)} is the continued fraction form of ${frac}`
        }
    },
    findConvergents: ({cFrac}) => {
        return {
            qType: 'shortAnswer',
            q: `find the convergents for the continued fraction ${cFracFormat(cFrac)}`,
            a: myMaths.convergents(cFrac).map(r => r.join('/')),
            hint: 'This is not easy or quick to describe. Maybe try googling.',
            giveAway: 'http://www.maths.surrey.ac.uk/hosted-sites/R.Knott/Fibonacci/cfINTRO.html',
            qFeedback: `The convergents of ${cFracFormat(cFrac)} are ${myMaths.convergents(cFrac).map(r => r.join('/'))}`
        }
    }
}

const cFracSetup = (qName) => {
    if (selector[qName] === undefined) {
        return { q: 'Default numberTheory-cFrac- Q' }
    }
    let [top, bottom] = rFuncs.nRandomInts(2, 20, 500);
    if (top === bottom) {top--}
    let cFrac = myMaths.cFrac(top, bottom);
    let convs = myMaths.convergents(cFrac);
    return selector[qName]({top, bottom, cFrac, convs})
}

module.exports = {
    sectionName: 'cFrac',
    qGetter: cFracSetup
}