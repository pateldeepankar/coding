let arr = [13, 46, 90, 52, 20, 9]
function selectionSort(array) {
    let len = array.length;
    for (let i = 0; i < len; i++) {
        let min = i;
        for (let j = i + 1; j <= len-1; j++) {
            if (array[j] < array[min]) {
                min = j;
            }
        }
        let temp = array[min];
        array[min] = array[i];
        array[i] = temp;
    }
    return array
}
console.log(selectionSort(arr));


