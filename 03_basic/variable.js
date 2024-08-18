function one (){
const username ="rohit" ;
const a = 20;
console.log(a);
function two(){
     const password ="1234";
    const b  =30 ;
    console.log(b);
    console.log(username);
    
}
two()
//console.log(password);

}
one()


if(true){
    const name = "rohit";
    if(name==="rohit"){
        const website = "  www.google.com";
        console.log(name+website);
       
        
    }
     //console.log(website);
    
}
//console.log(name);

//+++++++++ INTERESTING++++++++

const result = addone(2)
console.log(result);
function addone(num){
    return(num+1)
}             ////   it will work

console.log(two1)                  ////// it will not work
const two1 = function(num){
    return num+2 ;
}


