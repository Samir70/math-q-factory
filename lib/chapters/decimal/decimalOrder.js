const rFuncs = require('../../nonQ/randFuncs');

const orderSetup = (qName) => {
    let thousands = rFuncs.randomInt(26) * 1000; // a number from 0 to 25000 
    let hundreds = (rFuncs.randomInt(9) + 1) * 100; // a number like 200
    let smaller = hundreds - rFuncs.randomInt(50) - 1; // a number like 176
    let tens = (rFuncs.randomInt(9) + 1) * 10; // a number like 20
    let tensBigger = hundreds + tens; // a number like 220
    let aBitOff = tensBigger - rFuncs.randomInt(9) - 1; // a number like 211
    let order1 = [hundreds, smaller, tensBigger, aBitOff];
    let order2 = [tensBigger, hundreds, smaller, aBitOff];
    let order3 = [aBitOff, tensBigger, hundreds, smaller];
    let list = [order1, order2, order3][rFuncs.randomInt(3)].map(d => Number((thousands + d) + 'e-3'));
    let upOrDown = rFuncs.randomInt(2);
    let sortDirection = upOrDown === 0 ? 'ascending' : 'descending'
    let ordered = [...list].sort((a, b) => upOrDown === 0 ? a - b : b - a);
    return {
        qType: 'sort',
        q: `Put ${list.join(', ')} into ${sortDirection} order`,
        a: ordered,
        hint: 'Adding zeros to the end of a decimal does not change its value',
        giveAway: `Sort ${list.map(d => d.toFixed(3)).join(', ')}`,
        qFeedback: `${ordered.join(', ')} is in ${sortDirection} order`
    }
}

module.exports = {
    sectionName: 'order',
    qGetter: orderSetup
}