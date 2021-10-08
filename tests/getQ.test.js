const { getMathsQs } = require('../lib/index');
// const { chapters } = require('../lib/Topics/chapterList');


const red = "\x1b[31m"
const yellow = "\x1b[33m"
const white = "\x1b[37m"
const green = "\x1b[32m"

const topicsToTest = [
    ['algebra01', '', ''],
    ['data', 'mode', ''],
    ['data', 'range', '']
]

const qTypes = [
    'classify', 'elimination', 'match', 'multiChoice', 'sort', 'shortAnswer'
]
// each question type needs particular properties. 
// The following lists the properties for each question type
const essentials = {
    classify: [],
    elimination: [],
    match: [],
    mulitChoice: [],
    sort: [],
    shortAnswer: ["q", "a"]
}

const desirables = [
    "hint", "giveAway", "qFeedback", "qPath"
]

const getQTests = () => {
    for (let [topic, subtopic, qName] of topicsToTest) {
        q = getMathsQs(topic, subtopic, qName);
        qDescription = [topic, subtopic, qName].join('-')
        let allEss = true;
        if (!qTypes.includes(q.qType)) {
            console.error(red, 'getQ: ', qDescription, 'has unknown qType', q.qType)
            allEss = false;
        } else {
            for (let ess of essentials[q.qType]) {
                if (q[ess] === undefined) {
                    console.log(red, `getQ: no ${ess} property found for ${qDescription}`)
                    allEss = false;
                }
            }
            if (allEss) {
                console.log(green, `getQ: found all essential properties for ${qDescription}`)
            } else {
                console.log(red, "^^^^^^^^^^^^^^^^^^^^^^^^^^^^")
                console.log(white, qDescription, q);
            }
        }
        let allDes = true;
        for (let des of desirables) {
            if (q[des] === undefined) {
                console.warn(yellow, `getQ: no ${des} property found for ${qDescription}`)
                allDes = false;
            }
        }
        if (allDes) {
            console.log(green, `getQ: found all desirable properties for ${qDescription}`)
        } else {
            console.log(yellow, "^^^^^^^^^^^^^^^^^^^^^^^^^^^^")
            console.log(white, qDescription, q);
        }
        console.log(white)
    }
}

module.exports = { getQTests }