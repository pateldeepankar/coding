let arr = [10,7,3,6,9,5,4];
let result = [];
function largestNumber(array){
    let largestNum = 0;
    const largest = array.filter((number) =>number > largestNum);
    largestNum = Math.max(...largest);
    //console.log(largestNum);
    return largestNum
}
console.log(largestNumber(arr));