function executer3inRow(){
    this.first();
    this.second();
    this.third();
}
const config = {
    first: ()=>{console.log(1)},
    second: ()=>{console.log(2)},
    third: ()=>{console.log(3)},
};
let binding = executer3inRow.bind(config);
binding();