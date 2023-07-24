function romanToInteger(roman) {
    let result =0;
    const rom = {
        "I": 1,
        "IV": 4,
        "V": 5,
        "IX": 9,
        "X": 10,
        "XL": 40,
        "L": 50,
        "XC": 90,
        "C": 100,
        "CD": 400,
        "D": 500,
        "CM": 900,
        "M": 1000
    }
    for(let i =0;i<roman.length;i++){
        let currVal = rom[roman[i]];
        let nextVal = rom[roman[i+1]];

        if(nextVal>currVal){
            result+=(nextVal-currVal);
            i++;
        }else{
            result+=currVal
        }
    }
  return result;
}
console.log(romanToInteger("XCCM"));

