const { getMathsQs } = require('../lib/index');
const { topicsToTest, shortAnswerPaths, totalQs } = require('../lib/qPathList');
const { red, yellow, white, green } = require('./colours');

const qTypes = [
    'classify', 'elimination', 'match', 'multiChoice', 'sort', 'shortAnswer'
]
// each question type needs particular properties. 
// The following lists the properties for each question type
const essentials = {
    classify: [],
    elimination: [],
    match: [],
    multiChoice: ["q", "a", "wrongOptions"],
    sort: [],
    shortAnswer: ["q", "a"]
}

const desirables = [
    "hints", "qFeedback", "qPath", "buildingBlocks" 
    // number theory Qs have a link property
]

// for (let chapter in totalQs) {
//     console.log(`${chapter} has ${totalQs[chapter]} questions`)
//     console.log(topicsToTest.filter(t => t[0] === chapter))
// }

const getQTests = (showAll, showBBs) => {
    for (let topic of topicsToTest) {
        let [chapter, section, qName] = topic.path;
        let rating = topic.rating;
        q = getMathsQs(chapter, section, qName, rating);
        qDescription = topic.path.join('-')
        if (topic.rating === undefined) {
            console.log(red, qDescription, 'has no rating')
            console.log(white, q)
        } else {
            if (typeof topic.rating !== 'number') {
                console.log(red, qDescription, 'has a', typeof topic.rating, 'instead of a number for a rating')
            }
        }
        let allEss = true;
        if (!qTypes.includes(q.qType)) {
            console.error(red, 'getQ: ', qDescription, 'has unknown qType', q.qType)
            allEss = false;
        } else {
            if (q.qType !== topic.qType) {
                console.log(red, 'getQ:', qDescription, 'has qType:', q.qType, 'expected', topic.qType)
            }
            for (let ess of essentials[q.qType]) {
                if (q[ess] === undefined) {
                    console.log(red, `getQ: no ${ess} property found for ${qDescription}`)
                    allEss = false;
                }
            }
            if (allEss && showAll) {
                console.log(green, `getQ: found all essential properties for ${qDescription}`)
            } 
            if (!allEss) {
                console.log(red, "^^^^^^^^^^^^^^^^^^^^^^^^^^^^")
                console.log(white, qDescription, q);
            }
        }
        let allDes = true;
        for (let des of desirables) {
            if (des === 'buildingBlocks' && !showBBs) {continue}
            if (q[des] === undefined) {
                console.warn(yellow, `getQ: no ${des} property found for ${qDescription}`)
                allDes = false;
            }
            if (des === 'hints') {
                if (!Array.isArray(q.hints)) {
                    console.log(yellow, `getQ: ${qDescription} hints is not an array`)
                    allDes = false;
                } else if (q.hints.length === 0) {
                    console.log(yellow, `getQ: ${qDescription} has empty array for hints`)
                    allDes = false;
                }
            }
            if (des === 'buildingBlocks') {
                if (!Array.isArray(q.buildingBlocks)) {
                    console.log(yellow, `getQ: ${qDescription} buildingBlocks is not an array`)
                    allDes = false;
                } else {
                    for (let bb of q.buildingBlocks) {
                        let [chap, sec, qName, rating] = bb.split('-');
                        if (rating === undefined) {
                            console.log(red, `getQ: ${qDescription} has a badly formatted building block (no rating): ${bb}`)
                            allDes = false
                        } else if (isNaN(rating)) {
                            console.log(red, `getQ: ${qDescription} has a building block that does not have a number for a rating: ${bb}`)
                        }
                    }
                }
            }
        }
        if (allDes && showAll) {
            console.log(green, `getQ: found all desirable properties for ${qDescription}`)
        } 
        if (!allDes) {
            console.log(yellow, "^^^^^^^^^^^^^^^^^^^^^^^^^^^^")
            console.log(white, qDescription, q);
        }
    }
    console.log(white)
}

module.exports = { getQTests }