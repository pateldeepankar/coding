let array = [[1, 2, 3], [2, 3, 4], [3, 4, 5]];

const flattenArray = (arr) => {
    let flattedResult = [];
    arr.forEach((element) => {
        if (Array.isArray(element)) {
            flattedResult = flattedResult.concat(flattenArray(element));
        } else {
            flattedResult.push(element)
        }

    })
    return flattedResult;
}

function nonRepeatNumberInArray(arr) {
    let flattedArray = flattenArray(array);
    let countNumber = {};

    flattedArray.forEach((num) => {
        countNumber[num] = (countNumber[num] || 0) + 1;
    })

    return flattedArray.filter((num) => countNumber[num] === 1);
}
console.log(nonRepeatNumberInArray(array));