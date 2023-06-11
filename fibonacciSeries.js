// function fibonacci(n){
//     if(n=== 0 || n===1){
//         return n
//     }
//      const res= fibonacci(n-1)+fibonacci(n-2);
//      return res;
// }


// console.log(fibonacci(8));

function fibonacci(n){
        let n1=0;
        let n2=1;
        let sum=0;
    for(let i=2;i<=n;i++){
        sum= n1+n2;
        n1=n2
        n2=sum
        
    }
    return sum
    
}
console.log(fibonacci(8));