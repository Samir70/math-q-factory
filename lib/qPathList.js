/**
 * The below are the paths that resolve to a question generator
 * The list will grow.
 * It is exported to an array of objects filled with 
 * qType, path and rating properties
 * List the rating after the final dash
 * Chapter and section shouldn't be empty. 
 * If the qname is empty, list a '-rating'
 */

const totalQs = {}
const shortAnswerPaths = {
    // chapter: {
    //     section1: ['qa', '1b'], // array of final parts to path},
    //     section2: ['q1']  // don't leave empty, use ['-rating'] if no last part},
    // }
    algebra01: {
        // notation: ['simplifyAddSub', 'expandBracket', 'expand&Simplify', 'factoriseLinear'],
        // simulEqs: ['shopping', 'sameOfOne', 'negOfOne', 'needsScaling', 'needsArranging'],
        solveLinear: ['oneStepMult-160', 'oneStepAdd-175', 'twoStep1-200', 'twoStep2-250', 'brackets-220', 'unknownBothSides-300', 'fraction-350'],
        substitute: ['6a(positive)-160', '6a(negative)-190', '6+a-180', '6a+2b-200', '6aminus2b+5-210'],
    },
    data: {
        mean: ['anyAnswer-135', 'findMissing-180', 'intAnswer-120'],
        median: ['even-150', 'odd-130'],
        mode: ['-120'],
        range: ['-110']
    },
    decimal: {
        // round: ['toWholeNumber', '1dp', '2dp', '1sigfig', '2sigfig']
    },
    examQs: {
        bakeryQ: ['loavesToFlour-149', 'flourToBags-150', 'loavesToBags-175', 'meanNoBags-210']
    },
    // factorsAndMultiples: {
    //     // some of these are best done as non-shortAnswer Qs. Maybe wait for restructure of code.
    //     classify: ['factorOrMultiple'],
    //     finding: ['howManyFactors', 'primeFactorisation', 'factorPairs' ],
    //     hcf: ['byListing', 'byFindingCFs'],
    //     lcm: ['byListing', 'byFindingHCF']
    // },
    formulas: {
        // temperature: ['fahFromCent', 'centFromFah'],
        'F=ma': ['findForce-200', 'findMass-250', 'findAcc-250']
    },
    fraction: {
        simplify: ['prime-75', 'composite-90'],
        ofAmount: ['oneSlice-70', 'manySlices-120', 'mixedNumber-190'],
        compare: ['sameDenom-170', 'sameNumer-180', 'noMatch-270'],
        // topHeavey: ['toMixedNumber', 'fromMixedNumber'],
        toPercentage: ['quarters-50', 'str8toOver100-150', 'simplifyThenToOver100-190'],
        // toPercentage2: ['viaDivision-230'],
        // toDecimal: ['common', 'needBusStop'],
        add: ['sameDenom-120', 'diffDenomChangeOne-180', 'diffDenomChangeBoth-230', 'mixedNumbers-250'],
        multiply: ['ordinary-110', 'mixedNumbers-150'],
        // divide: ['ordinary', 'mixedNumbers'],
        // wordy: ['ballsInABag'],
    },
    number: {
        multiplying: ['a0*b-70', 'ab*c-110', 'ab*cd-125', 'ab*c.d-135', 'cubeDigit-105', 'squareDigit-100', 'squareEndIn1-127', 'squareEndIn5-127', 'tables2to9-45'],
        dividing: ['tables2to9-60', 'tablesWithRemainder-80'],
        busStop: ['noCarry1-80', 'noCarry2-85', 'noRemainder-90', 'withRemainder-95'],
        negNums: ['add-100', 'sub-110', 'times-105', 'divide-105'],
        bidmas: ['a+bxc-100', 'axbtakec-80', 'ax(b+c)-90', 'atakeb+c-110', 'a^2takebxc-100', 'a+(btakec)^2-120'],
        // estimate: ['1sigfig', '2sigfig', 'bigCalc']
    },
    numberTheory: {
        cFrac: ['rational-3500', 'findConvergents-3500']
    },
    percent: {
        ofAmount: ['multiplesOf25%-60', 'multiplesOf10%-100', 'multiplesOf5%-120', 'multiplesOf1%-150'],
        // change: ['sales', 'tax'],
        // findChange: [''],
        // interest: ['simple', 'compound'],
        // reversePercentage: ['']
    },
    // powers: {
    //     evaluate: ['positive-110', 'negative-250', 'fractional-400']
    // },
    ratio: {
        simplify: ['noUnits1-40', 'noUnits2-80', 'withUnits-150'],
        share: ['findTotal-150', 'givenTotal-200', 'givenDiff-300'],
        fractions: ['ratio2Frac-120', 'frac2Ratio-120']
    },
    sequences: {
        linear: ['findNextTerm-60', 'giveTermToTermRule-100', 'useFormulaTimesTables-150', 'useFormula1to5-200', 'useFormula100s-275', 'findFormula-250'],
        // geometric: ['findNextTerm', 'giveTermToTermRule', 'useFormula1to5', 'useFormula100s', 'findFormula'],
        // fibonacci: ['findNextTerm'],
        // twoStep: ['findNextTerm']
    },
    shape: {
        rectangle: ['areaFromLW-105', 'wFromAreaL-125', 'areaFromPerimSide-160', 'perimFromLW-105', 'wFromPerimL-125', 'perimFromAreaSide-155']
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
    wordy: {
        busStop: ['rnd-95', 'weeks-90', 'prize-90', 'bill-90', 'holiday-99',],
        findTotal: ['EdexcelSampleAQ01-50', 'fruit&Veg-65'],
        divide: ['EdexcelSampleAQ02-99'],
        multiply: ['EdexcelSampleAQ03-99'],
    }
}

const multiChoicePaths = {
    vocab: {
        angles: ['rnd-50', 'acute-40', 'obtuse-40', 'right-30', 'reflex-150'],
        circles: ['rnd-195', 'diameter-80', 'radius-80', 'tangent-200', 'chord-220'],
        // sequences: [''],
        triangles: ['rnd-100', 'scalene-130', 'isosceles-100', 'equilateral-100'],
        // typesOfNumber: [''],
        // quadrilaterals: ['']
    },
    powers: {
        simplify: ['times-205', 'divide-210', 'brackets-215'],
    },
    wordy: {
        compareMetricUnits: ['EdexcelSampleAQ04-99']
    }
}

const sortQPaths = {
    decimal: {
        order: ['-120'],
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
        if (totalQs[chapter] === undefined) (totalQs[chapter] = { qCount: 0, min: Infinity, max: -Infinity })
        for (let section in pathsList[qType][chapter]) {
            totalQs[chapter].qCount += pathsList[qType][chapter][section].length
            for (let data of pathsList[qType][chapter][section]) {
                let [qName, rating] = data.split('-')
                if (data.split('-').length > 2) {
                    console.log("\x1b[31m", data)
                    console.log('##############################')
                    console.log('!!!!!!too many dashes!!!!!!!!')
                    console.log({ data, split: data.split('-') })
                    console.log('##############################')
                }
                topicsToTest.push({
                    qType,
                    path: [chapter, section, qName],
                    rating: Number(rating)
                })
                totalQs[chapter].min = Math.min(totalQs[chapter].min, Number(rating))
                totalQs[chapter].max = Math.max(totalQs[chapter].max, Number(rating))
                // console.log(topicsToTest.slice(-1))
            }
        }
    }
}
// console.log(totalQs)//, topicsToTest)
module.exports = { topicsToTest, totalQs }
