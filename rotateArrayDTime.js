let arr = [4, 3, 7, 2, 9, 6, 7, 8];
function rotateArray(array, d) {
    let temp = [4, 3, 7, 2]
    let j = 0;
    let i;
    for (i = d; i < array.length; i++) {
        array[i - d] = array[i]
    }
    for (let k = array.length - d; k < array.length; k++) {
        array[k] = temp[j]
        j++;
    }
    return array
}
console.log(rotateArray(arr, 4));