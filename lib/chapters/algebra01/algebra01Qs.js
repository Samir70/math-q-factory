const subtopics = [
    'simplifyAddSub', 'expandBracket', 'expand2Simplify',
    'factorise1', 'factorise2', 'substitution'
]

algebra01Qs = (subtopic = '', qTopic = '') => {
    return {q: 'default algebra Q', a: 42}
}

module.exports = {
    chapterName: 'algebra01',
    qGetter: algebra01Qs
}