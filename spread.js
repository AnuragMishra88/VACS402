let a=[1,2,4];
console.log(a);
console.log(Math.min(...a));
console.log(Math.max(...a));

let c=[...a,6,7,8,8,9]; //sirf
console.log(c);

let b=[a,6,7,8,8,9]; //sirf
console.log(b);

let x={
    "name":"Anurag",
    "degree":"BTech"
}
let y={...x,
    "city":"gzb"
};
console.log(y);