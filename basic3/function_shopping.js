function shooping(...num1){
 console.log(num1);
return
}

shooping(200) ;
shooping(20,60,80,90)

const obj = {
    username:"rohit",
    college : "gehu",
}

function handleobject(anyobject) {
 console.log(` username is ${anyobject.username} and college is ${anyobject.college }` );
 return ;
}
// method 1
// handleobject(obj) ;  

// method 2
handleobject({
    username:"rohit",
    college:"gehu"
})

const myarray = [200,500,700] ;
function handlearray(array){
    return(array[2])
}

 //console.log(handlearray(myarray));
console.log(handlearray([
    200,500,900
]));
