const user ={
    username:"rohit",
    password:1234,
}

const myarr=[1,3,4,6]

Object.prototype.printme=function(){
    console.log(`can be use any where`);
    
}
//user.printme()
//myarr.printme()

Array.prototype.canuse=function(){
    console.log(`can i use it in array`);
    
}

//myarr.canuse()



//inheritance

const myuser = {
    name:"rohit",
}

const teacher = {
    makevideo:true
}

const teachingsupport = {
    available:true,
    //__proto__:teacher
}

const TAsupport = {
assignemt:"js ",
full_time:true,
__proto__:teachingsupport
}

teacher.__proto__=myuser

// console.log(teacher.name);
// console.log(TAsupport.available);
// console.log(TAsupport.makevideo);


//modern syntax

Object.setPrototypeOf(teachingsupport,teacher)
//console.log(teachingsupport.makevideo);


let anothername = "rohit          "
String.prototype.actuallength=function(){
    console.log(`${this}`);
    console.log(`the actual length is ${this.trim().length} `);
    
    
}

anothername.actuallength()

"chaiaurcode         ".actuallength()



