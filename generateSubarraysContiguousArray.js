let arr = [1,2,3];
/**
 * 
 * @param {[]} array 
 * @returns 
 */
function generate_subarray(array){
    let globalArray = [];
    for(let i = 0 ; i<array.length;i++){
        for(let j = i+1; j<=array.length;j++){
             let localArray = array.slice(i,j);
             globalArray.push(localArray);
        }
    }
    return globalArray;
}
console.log(generate_subarray(arr));






