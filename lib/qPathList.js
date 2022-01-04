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
    algebra01: {
        // notation: ['simplifyAddSub', 'expandBracket', 'expand&Simplify', 'factoriseLinear'],
        // simulEqs: ['shopping', 'sameOfOne', 'negOfOne', 'needsScaling', 'needsArranging'],
        solveLinear: ['oneStepMult-60', 'oneStepAdd-75', 'twoStep1-100', 'twoStep2-150', 'brackets-120', 'unknownBothSides-300', 'fraction-350'],
        // substitute: ['oneLetter', 'twoLetters'],
    },
    data: {
        mean: ['anyAnswer-135', 'findMissing-180', 'intAnswer-120'],
        median: ['even-150', 'odd-130'],
        mode: ['-120'],
        range: ['-90']
    },
    decimal: {
        // round: ['toWholeNumber', '1dp', '2dp', '1sigfig', '2sigfig']
    },
    // factorsAndMultiples: {
    //     // some of these are best done as non-shortAnswer Qs. Maybe wait for restructure of code.
    //     classify: ['factorOrMultiple'],
    //     finding: ['howManyFactors', 'primeFactorisation', 'factorPairs' ],
    //     hcf: ['byListing', 'byFindingCFs'],
    //     lcm: ['byListing', 'byFindingHCF']
    // },
    fraction: {
        simplify: ['prime-75', 'composite-90'],
        ofAmount: ['oneSlice-70', 'manySlices-120', 'mixedNumber-190'],
        compare: ['sameDenom-170', 'sameNumer-180', 'noMatch-270'],
        // topHeavey: ['toMixedNumber', 'fromMixedNumber'],
        // toPercentage: ['toOver100', 'viaDivision'],
        // toDecimal: ['common', 'needBusStop'],
        // add: ['sameDenom', 'diffDenom', 'mixedNumbers'],
        // multiply: ['ordinary', 'mixedNumbers'],
        // divide: ['ordinary', 'mixedNumbers'],
        // wordy: ['ballsInABag'],
    },
    number: {
        multiplying: ['a0*b-70', 'ab*c-90', 'ab*cd-95', 'ab*c.d-110', 'cubeDigit-65', 'squareDigit-60', 'squareEndIn1-75', 'squareEndIn5-70', 'tables2to9-45'],
        dividing: ['tables2to9-60', 'tablesWithRemainder-80'],
        busStop: ['noCarry1-90', 'noCarry2-110', 'noRemainder-150', 'withRemainder-180'],
        negNums: ['add-80', 'sub-85', 'times-70', 'divide-70'],
        // estimate: ['1sigfig', '2sigfig', 'bigCalc']
    },
    numberTheory: {
        cFrac: ['rational-3500', 'findConvergents-3500']
    },
    percent: {
        ofAmount: ['multiplesOf25%', 'multiplesOf5%', 'multiplesOf1%'],
        // change: ['sales', 'tax'],
        // findChange: [''],
        // interest: ['simple', 'compound'],
        // reversePercentage: ['']
    },
    ratio: {
        simplify: ['noUnits1-40', 'noUnits2-80', 'withUnits-150'],
        share: ['findTotal-150', 'givenTotal-200', 'givenDiff-300']
    },
    sequences: {
        linear: ['findNextTerm-60', 'giveTermToTermRule-100', 'useFormula1to5-180', 'useFormula100s-275', 'findFormula-250'],
        // geometric: ['findNextTerm', 'giveTermToTermRule', 'useFormula1to5', 'useFormula100s', 'findFormula'],
        // fibonacci: ['findNextTerm'],
        // twoStep: ['findNextTerm']
    },
    // quadratic: {
    //     expandBrackets: ['explicit', 'oneBracketSquared'],
    //     factorise: [''],
    //     solve: ['factorise', 'completeSquare', 'useFormula']
    // },
    // unitConversion: {
    //     metric: ['m/cm', 'm/mm', 'km/m', 'g/mg', 'kg/g', 'L/cL', 'L/mL'],
    //     time: ['MinSec/Sec', 'HMS/S']
    // },
}

const multiChoicePaths = {
    vocab: {
        angles: ['acute-40', 'obtuse-40', 'right-30', 'reflex-80'],
        circles: ['diameter-80', 'radius-80', 'tangent-100', 'chord-120'],
        // sequences: [''],
        // triangles: [''],
        // typesOfNumber: [''],
        // quadrilaterals: ['']
    }
}

const sortQPaths = {
    decimal: {
        order: ['-100'],
    }
}

const pathsList = {
    shortAnswer: shortAnswerPaths, 
    multiChoice: multiChoicePaths, 
    sort: sortQPaths
}

const topicsToTest = []
for (let qType in pathsList) {
    for (let chapter in pathsList[qType]) {
        totalQs[chapter] = totalQs[chapter] || 0
        for (let section in pathsList[qType][chapter]) {
            totalQs[chapter] += pathsList[qType][chapter][section].length
            for (let data of pathsList[qType][chapter][section]) {
                let [qName, rating] = data.split('-')
                if (data.split('-').length > 2) {
                    console.log("\x1b[31m", data)
                    console.log('##############################')
                    console.log('!!!!!!too many dashes!!!!!!!!')
                    console.log('##############################')
                }
                topicsToTest.push({
                    qType,
                    path: [chapter, section, qName],
                    rating: Number(rating)
                })
                // console.log(topicsToTest.slice(-1))
            }
        }
    }
}
// console.log(totalQs, topicsToTest)
module.exports = { topicsToTest, totalQs }