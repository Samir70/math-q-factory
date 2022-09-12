/**
 * The below are the paths that resolve to a question generator
 * The list will grow.
 * It is exported to an array of objects filled with 
 * qType, path and rating properties
 * List the rating after the final dash
 * Chapter and section shouldn't be empty. 
 * If the qname is empty, list a '-rating'
 * Some paths use a # to seperate qType from modifiers
 * eg: 'mm2cm#DEC-85', 'mm2cm#DECREV-85',
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
        solveLinear: ['oneStepMult-260', 'oneStepAdd-275', 'twoStep1-300', 'twoStep2-350', 'brackets-320', 'unknownBothSides-400', 'fraction-450'],
        substitute: ['6a(positive)-255', '6a(negative)-275', '6+a-255', '6a+2b-280', '6aminus2b+5-285'],
    },
    conversion: {
        metric: [
            'rndLow-85', 'rndHigh-120',
            // the # seperates the qName from the modifiers DEV and or REV
            'mm2cm#-60', 'mm2cm#REV-60', 'mm2cm#DEC-85', 'mm2cm#DECREV-85', 
            'mm2m#-98', 'mm2m#REV-98', 'mm2m#DEC-110', 'mm2m#DECREV-110', 
            'mm2km#-130', 'mm2km#REV-130', 'mm2km#DEC-145', 'mm2km#DECREV-145', 
            'cm2m#-75', 'cm2m#REV-75', 'cm2m#DEC-95', 'cm2m#DECREV-95', 
            'cm2km#-130', 'cm2km#REV-130', 'cm2km#DEC-145', 'cm2km#DECREV-145', 
            'm2km#-75', 'm2km#REV-75', 'm2km#DEC-95', 'm2km#DECREV-95', 
            'mg2g#-105', 'mg2g#REV-105', 'mg2g#DEC-145', 'mg2g#DECREV-145', 
            'g2kg#-75', 'g2kg#REV-75', 'g2kg#DEC-95', 'g2kg#DECREV-95',             
            'mL2cL#-85', 'mL2cL#REV-85', 'mL2cL#DEC-105', 'mL2cL#DECREV-105', 
            'mL2L#-75', 'mL2L#REV-75', 'mL2L#DEC-95', 'mL2L#DECREV-95', 
            'cL2L#-105', 'cL2L#REV-105', 'cL2L#DEC-115', 'cL2L#DECREV-115'
        ],
        // time: ['MinSec/Sec', 'HMS/S']
    },
    data: {
        mean: ['anyAnswer-135', 'findMissing-180', 'intAnswer-120'],
        median: ['even-260', 'odd-255'],
        mode: ['-255'],
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
        'F=ma': ['findForce-280', 'findMass-300', 'findAcc-300']
    },
    fraction: {
        simplify: ['prime-75', 'composite-90'],
        ofAmount: ['oneSlice-70', 'manySlices-120', 'mixedNumber-190'],
        compare: ['sameDenom-170', 'sameNumer-180', 'noMatch-240'],
        // topHeavey: ['toMixedNumber', 'fromMixedNumber'],
        toPercentage: ['quarters-105', 'str8toOver100-150', 'simplifyThenToOver100-190'],
        // toPercentage2: ['viaDivision-230'],
        // toDecimal: ['common', 'needBusStop'],
        add: ['sameDenom-120', 'diffDenomChangeOne-180', 'diffDenomChangeBoth-275', 'mixedNumbers-315'],
        multiply: ['ordinary-260', 'mixedNumbers-310'],
        // divide: ['ordinary', 'mixedNumbers'],
        // wordy: ['ballsInABag'],
    },
    number: {
        multiplying: ['a0*b-70', 'ab*c-110', 'ab*cd-125', 'ab*c.d-135', 'cubeDigit-105', 'squareDigit-100', 'squareEndIn1-127', 'squareEndIn5-127', 'tables2to9-45'],
        dividing: ['tables2to9-60', 'tablesWithRemainder-80'],
        busStop: ['noCarry1-80', 'noCarry2-85', 'noRemainder-90', 'withRemainder-95'],
        negNums: ['add-105', 'sub-110', 'times-105', 'divide-105'],
        bidmas: ['a+bxc-105', 'axbtakec-80', 'ax(b+c)-90', 'atakeb+c-110', 'a^2takebxc-100', 'a+(btakec)^2-120'],
        // estimate: ['1sigfig', '2sigfig', 'bigCalc']
    },
    numberTheory: {
        cFrac: ['rational-3500', 'findConvergents-3500']
    },
    percent: {
        ofAmount: ['multiplesOf25%-60', 'multiplesOf10%-105', 'multiplesOf5%-120', 'multiplesOf1%-150'],
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
        rectangle: ['areaFromLW-105', 'wFromAreaL-125', 'areaFromPerimSide-240', 'perimFromLW-105', 'wFromPerimL-125', 'perimFromAreaSide-240']
    },
    // quadratic: {
    //     expandBrackets: ['explicit', 'oneBracketSquared'],
    //     factorise: [''],
    //     solve: ['factorise', 'completeSquare', 'useFormula']
    // },    
    wordy: {
        busStop: ['rnd-95', 'weeks-90', 'prize-90', 'bill-90', 'holiday-99',],
        findTotal: ['EdexcelSampleAQ01-50', 'fruit&Veg-65'],
        divide: ['EdexcelSampleAQ02-99'],
        multiply: ['EdexcelSampleAQ03-99'],
    }
}

const multiChoicePaths = {
    conversion: {
        metricMCQ: [
            'rndLow-60', 'rndHigh-110',
            'howManyMMinCM-35', 'howManyCMinM-40', 'howManyMMinM-95', 'howManyMinKM-40', 'howManyCMinKM-105', 'howManyMMinKM-110',
            'howManyGinKG-40', 'howManyMGinKG-130', 'howManyMGinG-105',
            'howManyMLinL-45', 'howManyCLinL-80', 'howManyMLinCL-85'
        ]
    },
    vocab: {
        angles: ['rnd-105', 'acute-40', 'obtuse-40', 'right-30', 'reflex-150'],
        circles: ['rnd-255', 'diameter-105', 'radius-105', 'tangent-255', 'chord-265'],
        // sequences: [''],
        triangles: ['rnd-255', 'scalene-260', 'isosceles-105', 'equilateral-105'],
        // typesOfNumber: [''],
        // quadrilaterals: ['']
    },
    powers: {
        simplify: ['times-255', 'divide-260', 'brackets-265'],
    },
    wordy: {
        compareMetricUnits: ['EdexcelSampleAQ04-99']
    }
}

const sortQPaths = {
    decimal: {
        order: ['-95'],
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
