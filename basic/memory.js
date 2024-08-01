// stack ( primitive ) // copies value change 
// heap (non - primitive) // original value change


let myname = "rohit" ; 
let anothername = myname ; 
anothername = "ankit";
console.log(myname); // rohit
console.log(anothername);  // ankit

// heap 
let user1 ={
    name:"rohit",
    email:"user1@gmail.com",

}
let user2 = user1;
user2.email="user2@gmail.com";
console.log(user1.email);   //user2@gmail.com
console.log(user2.email);    //user2@gmail.com