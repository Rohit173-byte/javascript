// // function sum(num1, num2){
// // console.log(num1+num2);


 
// // }
// // // sum(2,4); // 6
// // // sum(2,"4")  //24
// // // sum(2,"a")  //2a

// //   const result = sum(2,5);

// // console.log(result);  // undefined  // no return 

// function sum(num1, num2){
//   return(num1+num2)
// }
// const result = sum(3,7); 
// console.log(result);


function userloggedIN(username){
 if(username===undefined||null)
 {console.log("enter your name");
 
  return } 
   else{
    return(`${username} just loggedIn` ) 
   }
  

}
console.log(userloggedIN("rohit"));
console.log(userloggedIN(""));    
console.log(userloggedIN());   // undefined