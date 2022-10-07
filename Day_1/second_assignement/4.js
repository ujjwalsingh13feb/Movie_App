const fs =require("fs");


console.log("before")
fs.readFile("./name.txt","utf-8",(err,data)=>{
    console.log(data);
});

console.log("after");

console.log("before-2");

let data = fs.readFileSync("./name.txt","utf-8");

console.log("data_1",data)

console.log("after-2");