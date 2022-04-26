const {makeBBList} = require('../lib/index');

const dummyQConnections = {

}

const dummyGetQs = (chap, sec, qName, rating) => {
    path = [chap, sec, qName, rating].join('-')
    return dummyQConnections[path]
}

const testMakeBBList = (path) => {

}