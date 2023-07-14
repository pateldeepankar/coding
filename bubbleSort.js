let arr = [6,89,34,54,2,0,56]
function bubbleSort(array){
    for(let i=0;i<array.length;i++){
        for(let j=0;j<array.length;j++){
            if(array[j]>array[j+1]){
                let temp = array[j+1];
                array[j+1] = array[j];
                array[j] = temp;
            }
        }
    }
    return array;
}
console.log(bubbleSort(arr));