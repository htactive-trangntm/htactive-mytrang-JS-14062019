//---------------------function parameter

//default parameter
// es6
function f (x, y = 7, z = 42) {
   return x + y + z;
   }
   console.log(f(50));
   
   // es5
   function f (x, y, z) {
   if (y === undefined)
   y = 7;
   if (z === undefined)
   z = 42;
   return x + y + z;
   };
   f(1) === 50;
   
   function defaultParameter(a=1,b=2){
      return a+b;
   }
   console.log(defaultParameter());

//the argument object

const arrayNumber = [1,5,3,7,2,9,19];
   function sumAll(arrayNumber) {
      var i;
      var sum = 0;
      for (i = 0; i < arrayNumber.length; i++) {
      sum += arrayNumber[i];
      }
      return sum;
   }
   console.log(sumAll(arrayNumber));

//rest parameter
function add(a,b){
   return a+b;
}

console.log(add(1,2,3,4,5));

//có thể được đề cập trong một định nghĩa hàm với ba dấu chấm .... 
//có nghĩa đen là tập hợp các tham số còn lại vào một mảng.

function sumAll(...array){ //được đề cập trong một định nghĩa hàm với ba dấu chấm ...
   let sum =0;
   for (let value of array) sum += value;
   return sum;
}

console.log(sumAll(200));
console.log(sumAll(200,2,3,4,4,4,4,6));
console.log(sumAll(200,2));

//**********note: The rest parameters must be at the end */


//Spread operator
let arr1=[1,2,5,32,7,3];
console.log(Math.max(arr1)); //expects a list of numeric arguments, not a single array://NaN: như true, false, null ... 
console.log(Math.max(...arr1));//==>32

let arr2=[100,1,4,53,2];
console.log(Math.max(...arr1,...arr2));//===>100
console.log(Math.max(6,...arr1,...arr2,1234)); //===>1234
