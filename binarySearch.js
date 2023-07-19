let array = [1,3,5,6];
function binarySearch(arr,target){
    let left = 0;
    let right = arr.length-1;
    let mid = 0;
    let result = 0;
    while(left<=right){
        mid = Math.floor((left+right)/2);
        if(arr[mid]===target){
            result = mid;
            break;
        }else if(target<arr[mid]){
            right = mid-1;
        }else if(target>arr[mid]){
            left = mid+1;
        }
    }
    return result;
}
console.log(binarySearch(array,5));