//ES6

class user {
    constructor(username,email,password){
this.username=username
this.email=email
this.password=password
    }

    encryptpass(){
return`${this.password}abc`
    }
    changeusername(){
        return(`${this.username.toUpperCase()}`)
    }
}

const chai = new user('rohit','rohit@gmail.com',1234)
console.log(chai.encryptpass());
console.log(chai.changeusername());


//behind the scene

function user1(username,email,password){
    this.username=username
    this.email=email
    this.password=password

}

user1.prototype.changeusername1=function(){
return(`${this.username.toUpperCase()}`)
}

const tea = new user1('rohit','rohit@gmail.com',1234)
console.log(tea.changeusername1());

