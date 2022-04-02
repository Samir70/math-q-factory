const rFuncs = require('../../nonQ/randFuncs');

const selector = (qn, a, b, c) => {
    let expr = null, ans = null;
    switch (qn) {
        case 'a+bxc': {
            expr = `${a} + ${b} x ${c}`;
            ans = a + b * c;
            break
        }
        case 'axbtakec': {
            expr = `${a} x ${b} - ${c}`
            ans = a * b - c
            break
        }
        case 'ax(b+c)': {
            expr = `${a} x (${b} + ${c})`
            ans = a * (b + c)
            break
        }
        case 'atakeb+c': {
            expr = `${a} - ${b} + ${c}`
            ans = a - b + c
            break
        }
        default: {
            expr = '10 - 2 + 6';
            ans = 14
        }
    }
    return { expr, ans }
}

const sectionSetup = (qName) => {
    let [a, b, c] = [0, 0, 0].map(x => rFuncs.randomInt(10) + 2)
    let { expr, ans } = selector(qName, a, b, c);
    return {
        qType: 'shortAnswer',
        hints: ['Look up what BIDMAS stands for'],
        buildingBlocks: [],
        q: `${expr} = ...`,
        a: ans,
        qFeedback: `${expr} = ${ans}`
    }
}

module.exports = {
    sectionName: 'bidmas',
    qGetter: sectionSetup
}