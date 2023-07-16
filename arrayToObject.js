const pairs = [
    ['a', 1],
    ['b', 2],
    ['c', 3],
];
function fromPairs(pairs) {
    let result = {};
    for (let pair of pairs) {
        result[pair[0]] = pair[1];
    }
    return result
}
console.log(fromPairs(pairs));