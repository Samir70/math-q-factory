const rFuncs = require('../../nonQ/randFuncs');
const { sliceNames } = require('../../nonQ/lists');

const selector = {
    oneSlice: (top, bottom, amount) => {
        let frac = [top, bottom].join('/');
        return {
            qType: 'shortAnswer',
            q: `Find ${frac} of ${amount}`,
            a: (amount / bottom),
            hints: [
                `Which number in the fraction tells us how many slices to cut a cake into?`,
                `We need to find one ${sliceNames[bottom]}, so share ${amount} into ${bottom} pieces`,
            ],
            qFeedback: `${frac} of ${amount} = ${amount} divided by ${bottom} = ${amount / bottom}`
        }
    },
    manySlices: (top, bottom, amount) => {
        let frac = [top, bottom].join('/');
        return {
            qType: 'shortAnswer',
            q: `Find ${frac} of ${amount}`,
            a: (amount / bottom) * top,
            hints: [
                `Share ${amount} into ${bottom} pieces, take ${top} out of the ${bottom} pieces`,
                `One slice is worth ${amount / bottom} \nHow many slices do we need?`,
            ],
            qFeedback: `${frac} of ${amount} = ${(amount / bottom) * top}`
        }
    },
    mixedNumber: (top, bottom, amount, wholeBoxes, name) => {
        let frac = [top, bottom].join('/');
        return {
            qType: 'shortAnswer',
            q: `A whole box of chocolates contains ${amount} chocolates. \n${name} has ${wholeBoxes} and ${frac} of these boxes. \nHow many chocolates does ${name} have?`,
            a: (wholeBoxes * amount) + (amount / bottom) * top,
            hints: [
                `The ${wholeBoxes} boxes all contain the same amount of chocolates`,
                `To find ${frac} of a box, "divide by the bottom, times by the top"`,
            ],
            qFeedback: `${frac} of a box of ${amount} chocolates is ${(amount / bottom) * top} chocolates. \n${wholeBoxes} boxes of chocolates have ${wholeBoxes * amount} chocolates`
        }
    }
}

const fracOfAmountSetup = (qName) => {
    let [top, bottom] = rFuncs.randomCoprimePair(false);
    if (qName === 'oneSlice') {
        top = 1;
        if (bottom > 9) { bottom = 9 } // can't currently happen, but sliceNames only defined up to nine
    } else if (top === 1) {
        top++; bottom++
        // can mean fraction is not simplified, but needed for many slices
    }
    let amount = bottom * (rFuncs.randomInt(9) + 4); // bottom * 4...12
    let wholeBoxes = rFuncs.randomInt(4) + 2; // 2, 3, 4, 5
    let name = rFuncs.randomNames(1);
    if (selector[qName] === undefined) {
        return { q: 'Default fraction-ofAmount- Q' }
    }
    return selector[qName](top, bottom, amount, wholeBoxes, name)
}

module.exports = {
    sectionName: 'ofAmount',
    qGetter: fracOfAmountSetup
}