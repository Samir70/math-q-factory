const { getQTests } = require('./tests/getQ.test');
const { getMathsQs } = require('./lib/index');
const { topicsToTest } = require('./lib/qPathList');
const { chapStructureTest, sectStructreTest } = require('./tests/chapSecStructure.test')
const { myMathTests } = require('./tests/myMath.tests');
const { formatFuncsTests } = require('./tests/formatfuncs.test');

const args = process.argv.slice(2)

if (args.length > 0 && args[0][0] !== '-') {
    while (args.length < 3) { args.push('') }
    let [chapter, section, qName] = args;
    let topics = topicsToTest.filter(t => t.path[0] === chapter);
    if (section !== '') { topics = topics.filter(t => t.path[1] === section) }
    if (qName !== '') { topics = topics.filter(t => t.path[2] === qName) }
    if (topics.length === 0) {
        console.log('No question found at path', args.join('-'))
        let [c, s, q] = args;
        console.log(getMathsQs(c, s, q))
    }
    for (let topic of topics) {
        let [c, s, q] = topic.path
        console.log('getting a ', [c, s, q].join('-'), 'question');
        console.log(getMathsQs(c, s, q))
    }
} else {
    let showAll = args.includes('--verbose');
    let showBBs = args.includes('--showBBs')
    chapStructureTest(showAll);
    sectStructreTest(showAll);
    myMathTests(showAll);
    formatFuncsTests(showAll);
    getQTests(showAll, showBBs);
}
