// const heros = ["spiderman","suprman","ironman"]


//  const heross = heros.forEach(  (val)=>{
//     console.log(val);
//     return val 
// })
//  console.log(heross);
 


const arr = [1,29,2,3,4,5,6,7,9]

const newarr = arr.filter( (val)=> val>5)
//console.log(newarr);



const newarr1 = arr.filter( (val)=>{
      return val>5
} )                            
//console.log(newarr1);                 // use return keeyword to return 




const newnum = []

arr.forEach( (num)=>{
    if (num>4) {
        newnum.push(num)
        
    }
})
console.log(newnum);
