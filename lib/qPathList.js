/**
 * The below are the paths that resolve to a question generator
 * The list will grow.
 * It is exported to an array of paths filled with [
 *      [chapter, section, qName]
 * ]
 * to make it easier to access a random question: just use randomElement function from randomFuncs.js
 */

const totalQs = {}
const shortAnswerPaths = {
    // chapter: {
    //     section1: [''], // array of final parts to path},
    //     section2: ['']  // don't leave empty, use [''] if no last part},
    // }
    // algebra01: {
    //     notation: ['simplifyAddSub', 'expandBracket', 'expand&Simplify', 'factoriseLinear'],
    //     simulEqs: ['shopping', 'sameOfOne', 'negOfOne', 'needsScaling', 'needsArranging'],
    //     solveLinear: ['oneStep', 'twoStep', 'brackets', 'unknownBothSides', 'fraction'],
    //     substitute: ['oneLetter', 'twoLetters'],
    // },
    data: {
        mean: ['anyAnswer', 'findMissing', 'intAnswer'],
        median: ['even', 'odd'],
        mode: [''],
        range: ['']
    },
    // decimal: {
    //     order: [''],
    //     round: ['toWholeNumber', '1dp', '2dp', '1sigfig', '2sigfig']
    // },
    // factorsAndMultiples: {
    //     // some of these are best done as non-shortAnswer Qs. Maybe wait for restructure of code.
    //     classify: ['factorOrMultiple'],
    //     finding: ['howManyFactors', 'primeFactorisation', 'factorPairs' ],
    //     hcf: ['byListing', 'byFindingCFs'],
    //     lcm: ['byListing', 'byFindingHCF']
    // },
    fraction: {
        simplify: ['prime', 'composite'],
        ofAmount: ['oneSlice', 'manySlices', 'mixedNumber'],
        compare: ['sameDenom', 'sameNumer', 'noMatch'],
        // topHeavey: ['toMixedNumber', 'fromMixedNumber'],
        // toPercentage: ['toOver100', 'viaDivision'],
        // toDecimal: ['common', 'needBusStop'],
        // add: ['sameDenom', 'diffDenom', 'mixedNumbers'],
        // multiply: ['ordinary', 'mixedNumbers'],
        // divide: ['ordinary', 'mixedNumbers'],
        // wordy: ['ballsInABag'],
    },
    number: {
        multiplying: ['a0*b', 'ab*c', 'ab*cd', 'ab*c.d', 'cubeDigit', 'squareDigit', 'squareEndIn1', 'squareEndIn5', 'tables2to9'],
        dividing: ['tables2to9', 'tablesWithRemainder'],
        busStop: ['noCarry1', 'noCarry2', 'noRemainder', 'withRemainder'],
        negNums: ['add', 'sub', 'times', 'divide'],
        // estimate: ['1sigfig', '2sigfig', 'bigCalc']
    },
    numberTheory: {
        cFrac: ['rational', 'findConvergents']
    },
    // percent: {
    //     ofAmount: ['multiplesOf25%', 'multiplesOf5%', 'multiplesOf1%'],
    //     change: ['sales', 'tax'],
    //     findChange: [''],
    //     interest: ['simple', 'compound'],
    //     reversePercentage: ['']
    // },
    ratio: {
        simplify: ['noUnits1', 'noUnits2', 'withUnits'],
        share: ['findTotal', 'givenTotal', 'givenDiff']
    },
    // sequences: {
    //     findNextTerm: ['linear', 'geometric', 'fibonacci', 'twoStep'],
    //     giveTerm2TermRule: ['linear', 'geometric', 'twoStep'],
    //     nthTermFormula: ['useFormula1to5', 'useFormula100s', 'findFormula']
    // },
    // quadratic: {
    //     expandBrackets: ['explicit', 'oneBracketSquared'],
    //     factorise: [''],
    //     solve: ['factorise', 'completeSquare', 'useFormula']
    // },
    // unitConversion: {
    //     metric: ['m/cm', 'm/mm', 'km/m', 'g/mg', 'kg/g', 'L/cL', 'L/mL'],
    //     time: ['MinSec/Sec', 'HMS/S']
    // },
    vocab: {
        angles: ['acute', 'obtuse', 'right', 'reflex'],
        // circles: ['diameter'],
        // sequences: [''],
        // triangles: [''],
        // typesOfNumber: [''],
        // quadrilaterals: ['']
    }
}

const topicsToTest = []
for (let chapter in shortAnswerPaths) {
    totalQs[chapter] = totalQs[chapter] || 0
    for (let section in shortAnswerPaths[chapter]) {
        totalQs[chapter] += shortAnswerPaths[chapter][section].length
        for (let qName of shortAnswerPaths[chapter][section]) {
            // console.log([chapter, section, qName])
            topicsToTest.push([chapter, section, qName])
        }
    }
}
module.exports = { topicsToTest, shortAnswerPaths, totalQs }