let arr = [1, 2, 3, 10, 4, 9, 5, 8];

function findMissingNumber(array) {
    let missingArray = [];
    let maxNum = Math.max(...array);

    for (let i = 1; i <= maxNum; i++) {
        if (!array.includes(i)) {
            missingArray.push(i)
        }
    }
    return missingArray
}
console.log(findMissingNumber(arr));