console.log("hello");

const a=15;
const b=30;

console.log(a+b);

const sum = (a,b)=>a+b
const sub = (a,b)=>a-b
const mul= (a,b)=>a*b
const div = (a,b)=>a/b

console.log(sum(14,16));
console.log(sub(14,16));
console.log(mul(14,16));
console.log(div(14,16));

//for Sin value of angle 
function getCircleY(radians, radius) {
    return Math.sin(radians) * radius;
  }
  
  console.log(getCircleY(1, 10));

//for cos value of angle 
  function getCircleX(radians, radius) {
    return Math.cos(radians) * radius;
  }
  
 
  console.log(getCircleX(1, 10));

   //for tan value of angle 

  function getTanFromDegrees(degrees) {
    return Math.tan(degrees * Math.PI / 180);
  }
  
  console.log(getTanFromDegrees(0));


/// random Integer of the value
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
  console.log(getRandomInt(3));