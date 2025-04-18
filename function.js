//!================basic structure for function declaration=====================
// function demo(){
//     console.log("hello");
//     console.log(typeof(demo));
// }
// demo();


//!================basic structure for function declaration=====================
// let demo=function(){
//     console.log(typeof(demo));
// }
// demo();


//!================basic structure for function declaration=====================
// let demo=()=>{
//     console.log("hello using arrow function");
// }
// demo();

//! ================Function with parameters and w/o parameters===========
// let add=function(a,b){
//     console.log(a+b);
// }
// add(10,23);

//!=========without parameters
// let mul=function(){
//     let x=10;
//     let y=20;
//     console.log(x*y);

// }
// mul();
//!========default parameters
// let div=function(m=4,n){
//     console.log(m/n);
// }
// div(5)

//!===========IIFE[Immediate invoked function expression]========
// (
//     function add(){
//         console.log(3+2);
//     }

// )();
//!===========function closure============
// function add1(no1,no2){
//     let sum=no1+no2;
//     console.log("addition of"+sum);
//     return function(no3){
//         let mul=no1*no2*no3;
//         return mul;
//     }
// }


//!=============Anonymous function=================
let app=function(){
    console.log("this is");
}
app();
