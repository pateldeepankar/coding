let array = [4,6,8,2,5,3];
function findTheAverageNumber(arr){
    let sum = 0;
    let countNo =0;
    for(let i = 0;i<arr.length;i++){
        sum+= arr[i];
    }
    let avgValue = sum/(arr.length);
    for(let i =0 ;i< arr.length;i++){
        if(arr[i]>avgValue){
            countNo++;
        }
    }
    return countNo;
}
console.log(findTheAverageNumber(array));



