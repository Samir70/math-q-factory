const rFuncs = require('../../nonQ/randFuncs');
const myMaths = require('../../nonQ/myMathFuncs');
const { cFracFormat } = require('../../nonQ/formatFuncs');

const selector = {
    rational: ({top, bottom, cFrac, simplified}) => {
        let frac = [top, bottom].join('/')
        return {
            q: `Find the continued fraction for ${frac}`,
            a: cFracFormat(cFrac),
        }
    },
    findConvergents: ({cFrac}) => {
        return {
            q: `find the convergents for the continued fraction ${cFracFormat(cFrac)}`,
            a: myMaths.convergents(cFrac).map(r => r.join('/')),
        }
    }
}

const cFracSetup = (qName) => {
    if (selector[qName] === undefined) {
        return { q: 'Default numberTheory-cFrac- Q' }
    }
    let [top, bottom] = rFuncs.nRandomInts(2, 20, 500);
    if (top === bottom) {top--}
    let gcd = myMaths.gcd([top, bottom]);
    let simplified = [top, bottom].map(n => n / gcd);
    let cFrac = myMaths.cFrac(top, bottom);
    let convs = myMaths.convergents(cFrac);
    return selector[qName]({top, bottom, cFrac, convs, simplified})
}

module.exports = {
    sectionName: 'cFrac',
    qGetter: cFracSetup
}