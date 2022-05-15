const makeBBList = (pathStr, getQ) => {
    let out = new Set();
    let toCheck = [pathStr], checked = new Set();
    checked.add(pathStr);
    for (let i = 0; i < toCheck.length; i++) {
        checked.add(toCheck[i]);
        let [chap, sec, qName, rating] = toCheck[i].split('-');
        if (isNaN(rating)) {
            console.log(`${toCheck[i]} has incorrect format for makeBBList`);
        }
        let nextBBs = getQ(chap, sec, qName, rating).buildingBlocks;
        if (nextBBs !== undefined) {
            for (let bb of nextBBs) {
                out.add(bb);
                if (!checked.has(bb)) {
                    toCheck.push(bb)
                }
            }
        }
        // console.log({checked, toCheck, nextBBs, out})
    }
    return [...out].map(p => p.split('-')).sort((a, b) => (a[3] || 0) - (b[3] || 0)).map(p => p.join('-'))
}

module.exports = {makeBBList}