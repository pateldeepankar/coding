let arr = [10, 10, 2, 11, 11, 9, 1, 7];
function secondLargestNumber(array) {
    let largestNumber = 0;
    let secLarNum = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i]> largestNumber) {
                secLarNum = largestNumber;
                largestNumber = array[i];
            }else if(array[i]<largestNumber && array[i]>secLarNum){
                secLarNum = array[i];
            }
        }
    return secLarNum
}
console.log(secondLargestNumber(arr));

// let arr=[400,23,76,98,99,102,394,25,76,87,65];

// let arr = [-1, -4, -10, -9, -31, Infinity]

// function secondLarger(arr){
//     let first=-Infinity;
//     let second=-Infinity;
//     for(let i=0;i<arr.length;i++){        
//         if(arr[i]>first){
//             second = first;
//             first=arr[i];
//         } else if(arr[i]<first && arr[i]>second) {
//             second = arr[i];
//         }
//     }
//     return second;
// }

// console.log(secondLarger(arr));


