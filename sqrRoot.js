/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x){
    for(let i=0;i<=x;i++){
        if(i*i===x){
            return i;
        }
        else if(i*i>x){
            return i-1;
        }
    }
    
}
console.log(mySqrt(4));


  
