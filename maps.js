let obj={"H.NO.":23,
    "City":"DLF",
    "Street":"ABS",
}
let classInfo=new Map([["A1",123],
                       ["A2",124],
                       ["A3",125],
                       ["A4",126],
                    ["A5",obj]]);
// always caps values in map
console.log(classInfo);
console.log(typeof classInfo);
// methods of maps
console.log(classInfo.get("A5"));  //to get values
console.log(classInfo.has("A2")); //to check presence of values
console.log(classInfo.set("A2",obj));  //to change the values
console.log(classInfo.size);
console.log(classInfo.delete("A3"));
console.log(classInfo);
