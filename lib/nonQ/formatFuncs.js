exports.joinList = (arr) => {
    if (arr.length <= 2) { return arr.join(' and ') }
    return arr[0] + ', ' + this.joinList(arr.slice(1))
}