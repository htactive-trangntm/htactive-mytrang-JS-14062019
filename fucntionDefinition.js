//-------------------JavaScript Function Definitions

//function declaration 

function myFunction(a,b){
   return a+b;
}


//function expression
var array1=[9,4,2,8,6];
var array2=[];
var sum3 = function(x){
   for(var i=0;i<x.leight;i++){
      (i%2==0)?array2.push(x[i]):0;
   }
   return array2;
}
;
console.log(sum3(array1));

//the Function() contructor
var myFcontructor = new Function("a", "b", "return a * b");
console.log(myFcontructor(1,2));

//function hoisting:  có thể gọi trước khi khai báo

// calculateSum(3,5);
function Sum2(x,y){
   return x+y;
}
