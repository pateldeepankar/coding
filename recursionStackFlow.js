function PrintIncursion (n,i){
    if(i>n){
        return 
    }
    else{
        console.log(i);
        PrintIncursion(n,++i);
        console.log(i);


    }

}
console.log(PrintIncursion(5,0));