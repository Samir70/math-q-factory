const { getMathsQs } = require('../lib/index');
// const { chapters } = require('../lib/Topics/chapterList');

const qTypes = [
    'match', 'multiChoice', 'sort', 'shortAnswer', 'classify', 'elimination'
]

const red = "\x1b[31m"
const yellow = "\x1b[33m"
const white = "\x1b[37m"

const topicsToTest = [
    ['algebra', '', ''],
    ['data', 'mode', ''],
    ['data', 'range', '']
]

for (let [topic, subtopic, qName] of topicsToTest) {
    q = getMathsQs(topic, subtopic, qName);
    qDescription = [topic, subtopic, qName].join('-')
    if (!qTypes.includes(q.qType)) {
        console.error(red, 'getQ ', qDescription, 'has unknown qType', q.qType)
    }
    if (q.qFeedback === undefined) {
        console.warn(yellow, 'getQ', qDescription, 'has no feedback')
    }
    console.log(white, qDescription, q)
}