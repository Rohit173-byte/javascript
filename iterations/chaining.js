const num =[ 1,2,3,4,5,6,7,8,9,10]

// const newnum=num.map((val)=>{
//      val=val*10
//     if(val>=20){
// return val 
//     }
   
// })
// console.log(newnum);   /// in palce of 10 it returning undefined

// const num1=num.filter((val)=>val*10>=20)
// const newnum= num1.map((val)=>val*10)

// to return in more short form
const num1= num.map((val)=>val*10)
const newnum = num1.filter((val)=>val>=20)

//console.log(newnum);


const digit = [1,2,3,4,5,6,7,8,9]
const newdigit=digit.map((val)=>val*10)
.map((val)=>val+5)
.filter((val)=>val>=20)
console.log(newdigit);
