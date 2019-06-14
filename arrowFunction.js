//Arrow function

let arr=[1,2,3,4,5];

//ES5
var sum = function(x,y){
   return x+y;
}
//ES6
const sum1=(x,y)=>{
   return x+y;
}

//ES5

let demo1 = arr.map(function(number){
   return number+1;
});
console.log(demo1);

//ES6
let demo2 = arr.map(number=>number+1);
console.log(demo2);

//===> the same result
