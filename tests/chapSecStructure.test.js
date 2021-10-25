const { red, white, green } = require('./colours');
const { chapters } = require('../lib/chapters/chapterList');
const { dataSections } = require('../lib/chapters/data/dataSectionsList');
const { fractionSectionList } = require('../lib/chapters/fraction/fractionSectionList');
const { numberSections } = require('../lib/chapters/number/numberSectionList');
const { numberTheorySectionList } = require('../lib/chapters/numberTheory/numberTheorySectionList');
const { ratioSections } = require('../lib/chapters/ratio/ratioSectionList');
const secList = [
    dataSections, fractionSectionList,
    numberSections, numberTheorySectionList,
    ratioSections,
]

const chapterEssentials = [
    "chapterName", "qGetter"
]
const chapStructureTest = () => {
    for (let chap of chapters) {
        let allEss = true;
        for (let prop of chapterEssentials) {
            if (chap[prop] === undefined) {
                console.log(red, `no ${prop} property found`);
                allEss = false;
            }
        }
        if (allEss) {
            console.log(green, 'found all essential properties in chapter', chap.chapterName)
        } else {
            console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^^^^')
            console.log(white, chap)
        }
    }
    console.log(white);
}

const sectionEssentials = [
    "sectionName", "qGetter"
]
const sectStructreTest = () => {
    for (let list of secList) {
        for (let sec of list) {
            let allEss = true;
            for (let prop of sectionEssentials) {
                if (sec[prop] === undefined) {
                    console.log(red, `no ${prop} property found`);
                    allEss = false
                }
            }
            if (allEss) {
                console.log(green, 'found all essential properties in section', sec.sectionName)
            } else {
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