const { chapters } = require('../lib/Topics/chapterList');
const { dataSections } = require('../lib/Topics/data/dataSectionsList');
const secList = [
    dataSections
]

const red = "\x1b[31m"
const yellow = "\x1b[33m"
const white = "\x1b[37m"
const green = "\x1b[32m"

const chapStructureTest = () => {
    for (let chap of chapters) {
        if (chap.chapterName && chap.qGetter) {
            console.log(green, 'found chapterName and qGetter in', chap.chapterName)
        } else {
            if (chap.chapterName === undefined) {
                console.log(red, 'no chapterNeme property');
            }
            if (chap.qGetter === undefined) {
                console.log(red, 'no qGetter property')
            }
            console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^^^^')
            console.log(white, chap)
        }
    }
    console.log(white);
}

const sectStructreTest = () => {
    for (let list of secList) {
        for (let sec of list) {
            if (sec.sectionName && sec.qGetter) {
                console.log(green, 'found sectionName and qGetter in', sec.sectionName)
            } else {
                if (sec.sectionName === undefined) {
                    console.log(red, 'no sectionName property');
                }
                if (sec.qGetter === undefined) {
                    console.log(red, 'no qGetter property')
                }
                console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^^^^')
                console.log(white, sec)
            }
        }
    }
    console.log(white)
}

module.exports = {
    chapStructureTest, sectStructreTest
}