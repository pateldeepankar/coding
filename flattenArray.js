let arr = [[[[1]]],[[2],[3]],[4,5,6]];
function flattenArray(array){
    let flatArray =[];
    array.forEach(element => {
        if(Array.isArray(element)){
            flatArray = flatArray.concat(flattenArray(element))
        }else{
            flatArray.push(element);
        }
    });
    return flatArray
}
console.log(flattenArray(arr));

