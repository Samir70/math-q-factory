const { getMathsQs } = require('../lib/index');
const { chapters } = require('../lib/Topics/chapterList');

console.log({
    noParams: getMathsQs(),
    topicIsAlgebra01: getMathsQs("algebra01"),
    topicIsData: getMathsQs("data")
})
console.log({
    topicIsData: getMathsQs("data", "mode")
})