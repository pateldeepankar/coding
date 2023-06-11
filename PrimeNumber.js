// function primeNumber(num) {
    
//     while(num > 1){
//         let output ="";
//         boolean = true;
//         for(let i=2 ; i< num ;i++) {
//             if(num % i== 0) {
//                 output+= "Not Prime Number";
//                 return false;
//             }
//             else{
//                 output+= "Prime Number";
//                 return true;
//             }
//         }
//     }
//     return output;
// }
// console.log(primeNumber(7));


function isPrimeNumber(num) {
    if (num <= 1) {
        throw new Error("Put right Value");
    }
    while (num > 1) {
        boolean = true;
        for (let i = 2; i < num/2; i++) {
            if (num % i === 0) {
                console.log("Not Prime Number");
                return false;
            }
            else {
                console.log("Prime Number")
                return true;
            }
        }
    }
    
}
console.log(isPrimeNumber(7));