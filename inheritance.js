class user{
   constructor(username){
    this.username=username
   }
   logme(){
    return(`the username is ${this.username}`)
   }
}

class teacher extends user{
    constructor(username,email,password){
        super(username)
this.password=password
this.email=email
    }
    addcource(){
        return(`new course is add by ${this.username}`)
    }
}

const chai = new teacher('rohit','rohit@fb.com',1234)
//console.log(chai);

const tea = new user('rohitchamoli')
//console.log(tea);
console.log(chai.logme());
console.log(chai==tea);
console.log(teacher==user);
console.log(chai instanceof teacher);
console.log(tea instanceof user);







