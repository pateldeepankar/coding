let arr = [3, 4, 2, -8, -3, -2, 0, 0, 4, 89, 7];

let sumOfPositiveArray = (array) => {
    let result = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            result += array[i]
        } else {
            console.log('positive number not available');
        }
    }
    return result
}
console.log(sumOfPositiveArray(arr));