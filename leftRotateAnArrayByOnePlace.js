let arr =[2,7,4,0,7,3,5]
function rotateArray(array){
    let temp = array[0];
    let len = array.length;
    for(let i=1;i<len;i++){
        
        array[i-1] = array[i];
        
    }
    array[len-1] = temp;
    return array;
}    
console.log(rotateArray(arr));
