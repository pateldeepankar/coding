function pal_inStr(str){
    let revString="";
    for(let i=str.length;i>=0;i--){
        revString=revString+str.charAt(i);
    }
    return revString;
}
console.log(pal_inStr("Amit"));