function digitCount (num){
    let count=0;
    while(num>0){
      num= Math.floor(num/10);
      count++;
    }
    return count;
}
 function armStrong (num) {
    let copy_num=num;
    let rem=0
    let sum=0;
    while(copy_num>0){
    rem=Math.floor(copy_num%10)
    sum = sum+(Math.pow(rem,digitCount(num)))
    copy_num= Math.floor(copy_num/10);
    
    }
    return sum === num? true:false
 }
 console.log(armStrong(768));





// // for (let i = 0; i <= copy_num; i++) {
    // //     digits = digits*10+Math.floor(copy_num % 10)
    // //     console.log(digits);
    // //     // copy_num = Math.floor(copy_num / 10);
    // //     // sum_of_power = Math.pow(digits, count);
        
    // }