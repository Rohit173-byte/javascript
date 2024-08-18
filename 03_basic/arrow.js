// // const user = {
// //  username :"rohit",
// //  price : 999,
// //    welcome:function(){
// //     console.log(`welcome ${this.username} to course`);
// //    console.log(this);
    
// //    }
   
   
   
// // }
// // user.welcome()
// // user.username = "ankit" ;
// // user.welcome()
// // console.log(this);
const code = {
  username:"rohit",
  password:1234,
   chai:function(){
    //console.log(this);
    
   }
}

code.chai()

//  const chai1 = function chai(){
//     const a =45;
//     console.log(a);
    
//         console.log(this);
//console.log(this.username);
        
//     }
//     chai()



const chai = () => {
    const a =45
    
    
        //console.log(this);
       // console.log(this.a);
        
        
    }
  // chai()

//   const addnumber = (num1,num2) => {
//     return num1+num2 
//   }
//   console.log(addnumber(6,7));
  
    

 //const addnumber = (num1,num2) => num1+num2 
  

//const addnumber = (num1,num2) => (num1+num2)

const addnumber = (num1,num2) => ({username:"rohit"})
  console.log(addnumber(2,7));
  