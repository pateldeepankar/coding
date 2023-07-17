let arr = [5, 8, 4, 0, 0, 9,0,5,0,5, 0, 9];
function movesToEnd(array) {
    let temp = [];
    let rr = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== 0) {
            temp.push(array[i]);
        } else {
            rr.push(array[i]);
        }
    }
    return temp.concat(rr);
}
console.log(movesToEnd(arr));