let arr = [1,2,1,2,1,2,9,3,5,9,5,1,2];
function insertionSort(array){
    for(let i=0;i<array.length;i++){
        // let j = i;
        // while(j>0 && array[j-1]>array[j]){
        //     let temp = array[j-1];
        //     array[j-1] = array[j];
        //     array[j] = temp;
        //     j--;
        // }

        for(let j = 0;j<array.length;j++){
            if(array[j-1]>array[j]){
                let temp = array[j-1];
                array[j-1] = array[j];
                array[j] = temp;
                
            }
        }
    }
    return array
}
console.log(insertionSort(arr));