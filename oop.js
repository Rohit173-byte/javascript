const user ={
    username:"rohit",
    email:"rohit@gmail.com",
     isloggedin:true,
     arr:[2,3,5],
    getUserDetail:function(){
           console.log(`username :${this.username}`);
           
    }
}
//console.log(user.getUserDetail());
console.log(user);


function myuser(username,email,isloggedin,arr1){
this.username=username
this.email=email
this.isloggedin=isloggedin
this.arr1=arr1
 this.info = function(){
console.log(`username ${this.username}`);

 }

return this
}
const userOne = new myuser("rohit chamoli","chamoli@gmail.com",true,[2,4,6])
const userTwo=  new myuser("ankit","ankir@gmail.com",false)
 console.log(userOne);
// console.log(userTwo);
// userOne.info()
// userTwo.info()
console.log(userOne.constructor);
console.log(userTwo.constructor);





