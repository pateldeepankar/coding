let array = [1,2,4,5,6];

function findMissingNumber(arr){
    let output =0;
    let output1 =0;
    for(let i=0;i<arr.length;i++){
        output+=arr[i]
    }
    for(let i=1;i<=6;i++){
        output1+=i
    }
    return output1-output
}
console.log(findMissingNumber(array));