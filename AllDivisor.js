function divisor(num) {
    for(let i= 1;i<=num;i++){
            if(Math.floor(num % i) === 0) {
                console.log(i);
            }
    }    
}
divisor(6);

/**
 * 6 = 1 2 3 6
 */