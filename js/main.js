

// let sum = 1+3*(5-4)/2;//12

// let a = true || "Hello"; //true
// let b = false || "Ha ha ha!";//"Ha ha ha!"
// let c = true && "Hello"; //Hello
// let d = false && "Ha ha ha!"; //false
// console.log("a = "+a);
// console.log("b = "+b);
// console.log("c = "+c);
// console.log("d = "+d);

//  let x = 15 > 3 || 3 < 15 && 3; //true

//  console.log(x);


//  let y = null || (undefined && "Hello");
// console.log("y = " + y);

// let num = 0;

// let z = num++ || 2 && 3; //1 

// console.log("z = " + z);


// let xx = 4 + 4 * 5 && 3 > 2 || "Hello" && undefined || 3 * 2 ? "Hello World!" : false;
//     xx = 4 + 20 && 3 > 2 || "Hello" && undefined || 6 ? "Hello World!" : false;
//     xx = true || "Hello" && undefined || 6 ? "Hello World!" : false;
//     xx = true || undefined || 6 ? "Hello World!" : false;
//     xx = true || 6 ? "Hello World!" : false;
//     xx = true ? "Hello World!" : false;
//     xx = "Hello World!";
// console.log("xx = " + xx);


function sayHello(name = "World"){ //Default Value
        console.log("Hello " + name +"!");
}

// sayHello('Nurbol');

// const sayHello  = function(){
//         console.log("Hello World!");
// }

// const sayHello = () => {
//         console.log("Hello World!");
// }

// sayHello();

function sSqure(width,height){
        return width * height;
}

let s= sSqure(100,200);

const sCircle = (r,pi = 3.14)=> {
        return pi*r*r;
}

s = sCircle(100);

console.log("Circle S = " + s);

//5! = 5*4! = 5*4*3!;

const factorial = (number) => {
        if(number == 1) return 1;
        return number * factorial(number-1);
};

const fac  = factorial(1000);
console.log(fac)



let fiboArr = [0,1,1,2,3,5,8,13,21,34,55,89];

const fibonacci = (number)=>{
        if(number == 0) return 0;
        if(number == 1) return 1;
        return fibonacci(number -2) + fibonacci(number -1);
}

console.log(fibonacci(50));

