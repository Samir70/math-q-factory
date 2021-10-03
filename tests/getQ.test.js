const { getMathsQs } = require('../lib/index');
const { topics } = require('../lib/Topics/topicList');

console.log({
    noParams: getMathsQs(),
    topicIsAlgebra01: getMathsQs(topics.algebra01)
})