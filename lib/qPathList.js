/**
 * The below are the paths that resolve to a question generator
 * The list will grow.
 * It is exported to an array of paths filled with [
 *      [chapter, section, qName]
 * ]
 * to make it easier to access a random question: just use randomElement function from randomFuncs.js
 */

const topicStructure = {
    // chapter: {
    //     section1: [''], // array of final parts to path},
    //     section2: ['']  // don't leave empty, use [''] if no last part},
    // }
    data: {
        mean: ['anyAnswer', 'findMissing', 'intAnswer'],
        median: ['even', 'odd'],
        mode: [''],
        range: ['']
    },
    number: {
        multiplying: ['a0*b', 'ab*c', 'ab*cd', 'ab*c.d', 'cubeDigit', 'squareDigit', 'squareEndIn1', 'squareEndIn5', 'tables2to9'],
        dividing: ['tables2to9', 'tablesWithRemainder'],
        busStop: ['noCarry1', 'noCarry2', 'noRemainder', 'withRemainder']
    },
    ratio: {
        simplify: ['noUnits1', 'noUnits2', 'withUnits']
    }
}

const topicsToTest = []
for (let chapter in topicStructure) {
    for (let section in topicStructure[chapter]) {
        for (let qName of topicStructure[chapter][section]) {
            // console.log([chapter, section, qName])
            topicsToTest.push([chapter, section, qName])
        }
    }
}
module.exports = { topicsToTest }