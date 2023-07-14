let str = "deepankar";
function prefix(string){
    let prefix="";
    let result = [];
    if(string.length == 0){
        return -1
    }
    for(let i=0;i<string.length;i++){
        for(let j=i+1;j<string.length-1;j++){
            result.push(string.slice(i,j));
        }
        for(let k=string.length;k>=0;k--){
            result.push(string.slice(i,k));
        }
        return result;
    }
    
}
console.log(prefix(str));