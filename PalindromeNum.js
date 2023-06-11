function palindrome(num) {
    let rev = 0;
    let output = "";
    org_num = num;

    while (num > 0) {
        rev = Math.floor(rev * 10 + num % 10);
        num = Math.floor(num / 10);
    }

    if (org_num === rev) {
        output += "Palindrome Number"
    }
    else {
        output += "Not Palindrome Number"
    }
    return output;

}
console.log(palindrome(5654));