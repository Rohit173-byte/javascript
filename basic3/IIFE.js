// NOTE:     TO prevent function from global scope polution : so grobal scope varible can't manupulate our function value
// so we use IIFE or to run function immediately 

(
    function chai(){
        // named IIFE
        const username = "rohit"
        console.log(`${username} connected to database`);
        
        
    }
)() ;
(           // simple IIFE
    (name) =>{
        console.log(`${name} connected`);
        
    }
)('rohit')