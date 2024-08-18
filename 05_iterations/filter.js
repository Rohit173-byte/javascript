const heros = ["spiderman","suprman","ironman"]


 const heross = heros.forEach(  (val)=>{
    //console.log(val);
    return val 
})
 //console.log(heross);
 


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
//console.log(newnum);


// const array = [
//     {
//         name:"rohit",
//         age:22,
//         college:"gehu",
//     } ,

//     {
//         name:"robin",
//         age:22,
//         college:"gehu",
//     }
// ]

// array.forEach( (val)=>{
//     console.log(val.name);
//     console.log(val.age);
    
    
// })


const books = [
  {
    name:"book1", genre:"history", publish:1999 , edition:2003,
  } ,
  {
    name:"book2", genre:"non-fiction", publish:1990 , edition:2007,
  },
  {
    name:"book3", genre:"fiction", publish:1985 , edition:2009,
  } ,
  {
    name:"book4", genre:"science", publish:2000 , edition:2011,
  } ,
  {
    name:"book5", genre:"astrology", publish:2001, edition:2015,
  } ,
  {
    name:"book6", genre:"history", publish:2002 , edition:2019,
  },
]

let book_detail=books.filter( (bk)=>{
 // return  bk.genre==="history"
    

})
book_detail=books.filter((bk)=>{
    return bk.publish>=1999&& bk.genre ==="history"
})
console.log(book_detail);

