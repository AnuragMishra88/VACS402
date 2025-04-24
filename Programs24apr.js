//! WAP TO DISPLAY THE NAME,AGE,CITY,COURSE

class Data{
    constructor(name,age,city,course){
        this.name=name;
        this.age=age;
        this.city=city;
        this.course=course;
    }
    display(){
        console.log(`Your Data is Name: ${this.name}, Age: ${this.age}, City: ${this.city}, Course: ${this.course}`);
    }
}
let d1=new Data("Anurag Mishra",21,"Ghaziabad","BTech");
d1.display();

//! WAP to display the name using callback function after 2 seconds.

function dp(callback){
    setTimeout(()=>{
        callback("Anurag Mishra");
    },2000)
}
function show(name){
    console.log(name);
}
dp(show);

//! WAP TO CHECK WHICH IS EVEN OR ODD FIND max min ALSO
function eos(...para){
    let result=0;
    for(i of para){
        result+=i;
    }
    let min=(Math.min(...para));
    let max=(Math.max(...para));
    console.log(`Sum is ${result} and minimum is ${min} and maximum is ${max}`);
}
eos(2,3,4,5,5,6,67,7,7,8,8);

//! WAP TO CALCULATE SUM AND AVERAGES FOR GIVEN ARRAY
function sum(...para2){
    let sum=0;
    let cnt=0;
    for(i of para2){
        sum+=i;
        cnt++;
    }
    console.log(`Sum is ${sum} and average is ${sum/cnt}`);
}
sum(2,3,4,5,6,7,8,8,9,10,23);

