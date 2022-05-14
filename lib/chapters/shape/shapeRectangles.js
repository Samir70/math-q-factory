const rFuncs = require('../../nonQ/randFuncs');

const selector = {
    areaFromLW: (len, wid, area) => {
        return {
            q: `What is the area of a rectangle with \nlength ${len} and width ${wid}?`,
            a: area,
            hints: [
                'How many 1x1 squares would a rectangle this size cover up?',
                'Area of a rectangle = length x width'
            ],
            buildingBlocks: [],
            qFeedback: `Area = ${len} x ${wid} = ${area}`
        }
    },
    wFromAreaL: (len, wid, area) => {
        return {
            q: `What is the width of a rectangle with \nlength ${len} and area ${area}?`,
            a: wid,
            hints: [
                'Put the numbers you know into the formula for area',
                `Area = length x width, so \n${area} = ${len} x width`
            ],
            buildingBlocks: [
                'algebra01-solveLinear-oneStepMult-60'
            ],
            qFeedback: `Width = ${area} / ${len} = ${wid}`
        }
    },
    areaFromPerimSide: (len, wid, area, perim) => {
        return {
            q: `What is the area of a rectangle that has \nperimeter ${perim} and length ${len}?`,
            a: area,
            hints: [
                'Use the perimeter to find the width of the rectangle',
                `Two of the sides add up to ${len * 2}. \nWhat do the other two sides add up to?`
            ],
            buildingBlocks: [
                'algebra01-solveLinear-oneStepMult-60', 'shape-rectangle-wFromPerimL-80'
            ],
            qFeedback: `The width is ${wid}, so \nArea = ${len} x ${wid} = ${area}`
        }
    },
    perimFromLW: (len, wid, area, perim) => {
        return {
            q: `What is the perimeter of a rectangle with \nlength ${len} and width ${wid}?`,
            a: perim,
            hints: [
                'The perimeter of a shape is the distance around the outside.',
                'Add up all four sides'
            ],
            buildingBlocks: [],
            qFeedback: `Half way round is ${len + wid} \nmaking the perimeter ${perim}`
        }
    },
    wFromPerimL: (len, wid, area, perim) => {
        return {
            q: `What is the width of a rectangle with \nlength ${len} and perimeter ${perim}?`,
            a: wid,
            hints: [
                `Two of the sides add up to ${len * 2}. \nWhat do the other two sides add up to?`,
                `Half way around the rectangle would be \nwidth + length`
            ],
            buildingBlocks: [
                'algebra01-solveLinear-oneStepAdd-75'
            ],
            qFeedback: `The width is ${wid}`
        }
    },
    perimFromAreaSide: (len, wid, area, perim) => {
        return {
            q: `What is the perimeter of a rectangle with \narea ${area} and length ${len}?`,
            a: perim,
            hints: [
                'Use the area to find the width of the rectangle'
            ],
            buildingBlocks: [
                'algebra01-solveLinear-oneStepAdd-75', 'shape-rectangle-wFromAreaL-85'
            ],
            qFeedback: `The width is ${wid} \nmaking the perimeter ${perim}`
        }
    }
}

const sectionSetup = (qName) => {
    if (selector[qName] === undefined) {
        return { q: 'Default shape-rectangle- Q' }
    }
    let len = rFuncs.randomInt(15) + 4, wid = rFuncs.randomInt(15) + 4;
    if (len < wid) { [len, wid] = [wid, len] }
    if (len === wid) { len++ }
    let area = len * wid, perim = 2 * (len + wid);
    return {
        qType: 'shortAnswer',
        ...selector[qName](len, wid, area, perim)
    }
}

module.exports = {
    sectionName: 'rectangle',
    qGetter: sectionSetup
}