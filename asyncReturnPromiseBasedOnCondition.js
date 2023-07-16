function promise(data){
    return new Promise((res,rej)=>{
        if(isNaN(data)){
            rej('Invalid data:Nan');
        }else{
            if(data%2===0){
                setTimeout(()=>{
                    res(`even number =${data}`);
                },1000)
            }else{
                setTimeout(()=>{
                    res(`odd number =${data}`);
                },2000)
            }
        }
    })
}
promise(3).then((result) =>{console.log(result);}).catch((e)=>{console.log(e);})