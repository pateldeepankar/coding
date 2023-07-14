let arr = [2,4,3,3,2,4,7];
function findSubArray(array,wk){
    let len = array.length;
    let global = [];
    for(let i = 0;i<=len-wk;i++){
        let local = [];
        for(let j = i;j < i+wk; j++){
            local.push(array[j])
        }
        global.push([...local]);
    }
    return global
}
console.log(findSubArray(arr,4));



  