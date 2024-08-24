function setusername(username){
    this.username=username
}

function userinfo(username,email,password){
setusername.call(this,username)
this.email=email
this.password=password
}

chai=new userinfo("chai","chai@fb.com",1234)
console.log(chai);



function code(email){
   this.email=email
}

Object.prototype.setit=function(username){
   this.username=username
   console.log('hello');
   
}
const mycode = new code('rohit@gmail.com')
mycode.setit('rohit')

console.log(mycode);

