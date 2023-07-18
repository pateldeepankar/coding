//********call */

// var obj = {num:2};

// var addToThis = function(a){
//     return this.num+a;
// }
// console.log(addToThis.call(obj,3));

//*****************************Call,apply***
// var obj = {num:2};

// var addToThis = function(a,b,c){
//     return this.num+a+b+c;
// }
// //console.log(addToThis.call(obj,1,2,3));

// var arr = [1,2,3];
// console.log(addToThis.apply(obj,arr));

//*********************************apply */

// var obj = {num:2};
// var obj2 = {num:5};
// var addToThis = function(a,b,c){
//     return this.num +a+b+c;
// }
// var arr = [1,2,3];
// console.log(addToThis.apply(obj,arr));
// console.log(addToThis.apply(obj2,arr));

// var obj = {num:2};

// var addToThis = function(a,b,c){
//     return this.num+a+b+c;
// }

// var arr = [1,2,3];
// var bound=addToThis.bind(obj);
// console.dir(bound(1,2,3));

var obj = {num:2};
var functionName = function(arg1,arg2,arg3){

}
functionName.call(obj,arg1,arg2,arg3);
functionName.apply(obj[arg1,arg2,arg3]);

var bound = functionName.bind(obj);
bound(arg1,arg2,arg3);