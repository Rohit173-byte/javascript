const useremail = " ";
if (useremail) {
    console.log("user got the email"); 
}
else
{
    console.log("user don't have email");
    
}

//falsy values
// false , 0 , -0 , BigInt 0n , null , undefined , NaN , ""


// truthy values 
// true , [] , {} , "0" , 'false', " " , function(){} , 


const arr = [];
if (arr.length==0) {
    console.log("array is empty");
}

const obj = {}
if (Object.keys(obj).length==0) {
    console.log("object is empty");
    
}

// false == 0  true 
// 0 == ""  true 
// false = ""   true 

 // nullish coalescing operator (??)  null undefined

 let val1 , val2 ,val3 , val4 , val5; 
 val1 = 6??10
 val2 = null??50
 val3 = undefined??70
 val4 = null??undefined
 val5 = null??undefined??40??80
 console.log(val1);
 console.log(val2);
 console.log(val3);
 console.log(val4);
 console.log(val5);


 // terniary operator

  //  condition?true:false

  const marks = 50 ;
  marks>=60?console.log("marks is greater than 60"):console.log("marks is less than 60");
  
  


