//using var

function chang(){
   var chang="cute";
   if(true){
      var chang ="chang dt"; //chang ni la chang đã khai báo ở trên
      console.log(chang);  //chang dt
   }
   console.log(chang); //vẫn là chang dt
}

chang();

//using let

function changchang(){
   let chang = "sexy";
   if(true){
      let chang = "best girl";
      console.log(chang); //best girl;
   }
   console.log(chang); //sexy
}

changchang();

const helloChang = '22.06.1982';

//helloChang = '01.01.2002'; //không thể gán lại hằng số!

//đối với object hay array thì vẫn có thể thay đổi bên trong nó

//--array
const changxd =["beautiful","nice","sexy"];
changxd.push("cute");
console.log(changxd);

//--object

const changdt = {
   name: "chang",
   age: 22
}

changdt.name = "trang";
changdt.age = 18;
changdt.gender="les";
console.log(changdt);