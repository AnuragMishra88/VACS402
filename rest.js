function cal(a,b,...params){   //rest -- advance arguments (keep it like an array)
    let sum=a+b;
    console.log(sum);
    console.log(params);
    let result=0;
    for(i of params){
        result+=i;
        if(i%2==0){
            console.log("EVEN");
        }
        else{
            console.log("ODD");
        }

    }
    console.log(result);
}
cal(3,5,5,4);