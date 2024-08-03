// const mysym = Symbol("key1");

// const obj = {
//     name : {
//         first_name : "rohit",
//         last_name : "chamoli",
//         email : "rohit@gmail.com"
//     },
//     age : 22,
//     LOggedIn : true ,
//     [mysym] : "mykey1",
//     college : "gehu",
    
// }
// console.log(obj);
// console.log(obj.name);

// const newobj = new Object()
// newobj.name = "rohit  chamoli"
// console.log(newobj);


// obj.greeting = function (){
//     console.log(`my name is ${this.name.first_name}`);
    
// }
// console.log(obj.greeting());


const obj1 = {
    a:1,
    b:2,
}
const obj2 = {
    c:3,
    d:4,
}
const obj3 =  Object.assign({},obj1,obj2);
console.log(obj3);
 

const obj4  = {...obj1,...obj2}
console.log(obj4);


