// primitive : call by values . the changes are done in copies of data not in original onces .
// 7 types : number , string , boolearn , null , undefined ,  symbol, BigInt


// reference(non primitive ) : call by reference 
 // type : array , object , function  


 const score = "123";
 const id = Symbol('1234');
 const anotherid=Symbol('1234' );
 console.log(id==anotherid);  // false 

 const anime =["one piece","naruto ","MHA"];  // obj 

 const obj ={
   name : 'rohit', 
      age: 21,
      clg: 'gehu' ,

 } 
  const myfun = function(){
 name1: ankit, 
   console.log(name);
  }
  console.log(typeof anime);