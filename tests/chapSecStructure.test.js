const { red, white, green } = require('./colours');
const { chapters } = require('../lib/chapters/chapterList');
const { algebraSections } = require('../lib/chapters/algebra01/algebraSectionList');
const { dataSections } = require('../lib/chapters/data/dataSectionsList');
const { decimalSections } = require('../lib/chapters/decimal/decimalSectionList');
const { formulasSections } = require('../lib/chapters/formulas/formulasSectionList');
const { fractionSectionList } = require('../lib/chapters/fraction/fractionSectionList');
const { numberSections } = require('../lib/chapters/number/numberSectionList');
const { numberTheorySectionList } = require('../lib/chapters/numberTheory/numberTheorySectionList');
const { percentSections } = require('../lib/chapters/percent/percentSectionsList');
const { powersSectionList } = require('../lib/chapters/powers/powersSectionList');
const { ratioSections } = require('../lib/chapters/ratio/ratioSectionList');
const { sequenceSections } = require('../lib/chapters/Sequences/sequenceSectionList');
const { shapeSections } = require('../lib/chapters/shape/shapeSectionList');
const { vocabSections } = require('../lib/chapters/Vocab/vocabSectionList');
const { wordySections } = require('../lib/chapters/Wordy/wordySectionList');
const secList = [
    algebraSections,
    dataSections, decimalSections, formulasSections, fractionSectionList,
    numberSections, numberTheorySectionList, percentSections, powersSectionList,
    ratioSections, sequenceSections, shapeSections,
    vocabSections, wordySections
]

const chapterEssentials = [
    "chapterName", "qGetter"
]
const chapStructureTest = () => {
    for (let chap in chapters) {
        let allEss = true;
        for (let prop of chapterEssentials) {
            if (chapters[chap][prop] === undefined) {
                console.log(red, `no ${prop} property found`);
                allEss = false;
            }
        }
        if (allEss) {
            console.log(green, 'found all essential properties in', white, chapters[chap])
        } else {
            console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^^^^')
            console.log(white, chapters[chap])
        }
    }
    console.log(white);
}

const sectionEssentials = [
    "sectionName", "qGetter"
]
const sectStructreTest = () => {
    for (let list of secList) {
        for (let sec in list) {
            let allEss = true;
            for (let prop of sectionEssentials) {
                if (list[sec][prop] === undefined) {
                    console.log(red, `no ${prop} property found`);
                    allEss = false
                }
            }
            if (allEss) {
                console.log(green, 'found all essential properties in', list[sec])
            } else {
                console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^^^^')
                console.log(white, list[sec])
            }
        }
    }
    console.log(white)
}

module.exports = {
    chapStructureTest, sectStructreTest
}