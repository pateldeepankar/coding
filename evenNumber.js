let arr = [1, 6, 6, 3, 2, 7];
function checkEvenNumber(array) {
    let status = false;
    let addValue = 0
    for (let i = 0; i < arr.length; i++) {
        if (array[i] % 2 === 0) {
            addValue += array[i];
        }
    }
    return addValue;
}
console.log(checkEvenNumber(arr));


new Promise((resolve,reject)=>{
    try{
        const data = '';
        resolve(data)
    }catch(e){
        reject(new Error(e));
    }
})