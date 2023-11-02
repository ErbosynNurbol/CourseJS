function saveScore(score) {
  if (score > 5) {
    alert("No way!");
    return;
  }
  //      if(score > 4){
  //              console.log("Very good!")
  //      }else if(score > 3){
  //              console.log("Good!");
  //      }else if(score > 2){
  //              console.log("Middle!");
  //      }else{
  //              console.log("Get out!");
  //      }

  switch (score) {
    case 5:
      {
        console.log("Good!");
      }
      break;
    case 4:
      {
        console.log("Good!");
      }
      break;
    case 3:
      {
        console.log("Middle!");
      }
      break;
    default: {
      console.log("Get out!");
    }
  }
}

//saveScore(5);

let arr = [4, 5, 6, 7, 8, 9];
// for(let i =0;i<arr.length;i++){
//       console.log(arr[i]);
// }

// for(index in arr){
//    console.log(index);
// }

// for(value of arr){
//      console.log(value);
// }

// let index = 10;
// do {
//   console.log("do while = " +arr[++index]);
// } while (index < arr.length);
// index = 10;
// while (index < arr.length) {
//   console.log("while = " + arr[++index]);
// }


// for(let i =2 ;i<=100;i++){
//         let isJaisan = true;
//         for(j=2;j<i;j++){
//                 if(i%j==0) {
//                         isJaisan = false;
//                         break;
//                 }
//         }
//         if(!isJaisan){
//            continue;
//         }
//         console.log(i);
// }


// grandfor:
// for(let num = 2 ;num<=3;num++){
//         for(let i = 2 ;i<=20;i++){
//                 for(j=2;j<i;j++){
//                         if(i%j==0) break grandfor;
//                 }
//                 console.log(i);
//         }
//         console.log(num);
// }


// arr.forEach((item,index) =>{
//         console.log(index);
// });

let num1 = 100;
let num2 = 100;

try{
        let num3 = num1 / num2;
        if(num3 == Infinity){
           throw new Error("Bolindi 0 bolmasyn!!!");
        }
}catch(error){ 
        alert('Error = '+ error.message);
}finally{
        console.log("Smile living!!!");
}
