function semaPhore(){
    let door="open";

   return function inner(){
        if(door==="close"){
            console.log("function busy");
        }else{
             door = "close";
             new Promise((res,rej)=>{
                setTimeout(()=>{
                    door = "open";
                    console.log("Door opened");
                    res();
                },3000)
            })
        }
    }
}

const resourse = semaPhore();

let timer = setInterval(()=>{
    resourse(); 
},1000);

setTimeout(()=>{
    clearInterval(timer);
},15000);