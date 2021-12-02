exports.joinList = (arr) => {
    if (arr.length <= 2) { return arr.join(' and ') }
    return arr[0] + ', ' + this.joinList(arr.slice(1))
}

exports.cFracFormat = (arr) => arr.length <= 1 ? `[${arr[0]}]` : `[${arr[0]}; ${arr.slice(1).join(', ')}]`

exports.stndrdth = (n) => {
    switch (n % 10) {
        case 1: { return 'st' }
        case 2: { return 'nd' }
        case 3: { return 'rd' }
        default: { return 'th' }
    }
}