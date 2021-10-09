const { getQTests } = require('./tests/getQ.test');
const { getMathsQs } = require('./lib/index');
const { chapStructureTest, sectStructreTest } = require('./tests/chapSecStructure.test')
const { myMathTests } = require('./tests/myMath.tests');

const args = process.argv.slice(2)

if (args.length > 0) {
    while (args.length < 3) { args.push('') }
    let [chapter, section, qName] = args;
    console.log('getting a ', args.join('-'), 'question')
    console.log(getMathsQs(chapter, section, qName))
} else {
    chapStructureTest();
    sectStructreTest();
    getQTests();
    myMathTests();
}
