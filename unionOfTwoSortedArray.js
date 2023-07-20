let array1 = [1,2,3,4,5];
let array2 = [2,3,4,4,5];

// function unionOfArrays(arr1,arr2){
//     const mySet = new Set([...arr1, ...arr2])

//     return Array.from(mySet);
// }
// console.log(unionOfArrays(array1,array2));

function unionOfArrays(arr1,arr2){
    const unionObj = {};

    for(const num of arr1){
        unionObj[num]=num
    }

    for(const num of arr2){
        unionObj[num]=num
    } 

    return Object.keys(unionObj).map(Number);
}
console.log(unionOfArrays(array1,array2));