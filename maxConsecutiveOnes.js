let array = [1,1,0,1,1,1,2,2,2,2,2,0,2,2]
function maxConOnes(arr,num){
    let maxi =0;
    let count =0;

    for(let i=0;i<arr.length;i++){
        if(arr[i]==num){
            count++;
            maxi=Math.max(maxi,count)
        }else{
            count=0;
        }
    }
    return maxi;
}
console.log(maxConOnes(array,2));