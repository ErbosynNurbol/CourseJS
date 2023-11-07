// let person = {
//   "name":'Nurbol',
//   "age":35,
//   "sayHello":function(time){
//     console.log("Salem, men Nurbol!");
//   }
// };


// delete person.name;
// delete person.sayHello;
// console.log(person);

// //name=Nurbol;password=1235sfd;3;email=sdfsdf@gmail.com;
// person.sayHello();

// let arr = new Array(person,"Hello",22);
// console.log(arr);

// for(var item in person){
//   console.log(item);
// }

//Callback

const introduce = (name)=>{
  console.log("My name is "+ name);
};

const sayHello = (intro,name = "Qushtar")=>{
  console.log("Hello "+name+"!!!!");
  if(name != "Erlan"){
    intro(name);
  }
};

// sayHello("Aidana",introduce);

// setTimeout(function(){
//   sayHello(introduce,"Aidana");
// },2000);

// setInterval(() => {
//   sayHello(introduce,"Aidana");
// }, 1000);

 async function getData(){
  await fetch("https://www.sozdikqor.org/api/query/all",{"method":"post"}).then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error('There has been a problem with your fetch operation:', error);
    });
}
getData();



async function calcData(){
   await new Promise((resolve,reject)=>{
    try{
      let sum = 5050;
      let num = 100;
      let x  =sum / num;
      if(x == Infinity){
        throw new Error("Bolindi 0 ge teng bolmasyn!");
      }
      resolve(x);
    }catch(error){
      reject(error);
    }
   }).then((data)=>{
    console.log("success data is:"+data);
   }).catch((error)=>{
    console.log("Error is:" + error);
   });
}

calcData();