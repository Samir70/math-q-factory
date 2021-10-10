exports.findQGetter = (propToMatch, valToMatch, listOfGetters) => {
    for (let g of listOfGetters) {
        if (g[propToMatch] === valToMatch && g.hasOwnProperty('qGetter') ) {
            return g['qGetter']
        }
    }
    return -1
}