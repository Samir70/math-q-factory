const { getQTests } = require('./tests/getQ.test');
const { chapStructureTest, sectStructreTest } = require('./tests/chapSecStructure.test')

getQTests();
chapStructureTest();
sectStructreTest();