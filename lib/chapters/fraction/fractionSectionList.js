const simplify = require('./fractionSimplify');
const ofAmount = require('./fractionOfAmount');
const compare = require('./fractionCompare');
const toPercentage = require('./fractionToPercentage');
const add = require('./fractionAdd');
const multiply = require('./fractionMultiply');

exports.fractionSectionList = {
    simplify, ofAmount, compare, 
    toPercentage,
    add, multiply
}