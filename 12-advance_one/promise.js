const promiseone=new Promise(function(reslove,reject){
    //db async task,cryptography,network task
    setInterval(function(){
        //console.log('async task is done');
        reslove()
    },'1000')
    })
    
    promiseone.then(function(){
        //console.log('promise consume');
        
    })

    new Promise(function(reslove,reject){
        //console.log('async task 2');
        reslove()
        
    }).then(function(){
        //console.log('aync 2 complete');
        
    })


    const promiseThree = new Promise(function (reslove,reject) {
        setInterval(function(){
            reslove({username:"rohit",email:"rohit@example.com"})
        },'1000')
    })

    promiseThree.then(function(user){
        console.log(user);
        
    })

    const promiseFour = new Promise(function(reslove,reject){
        setInterval(function(){
             let error=false;
             if(!error){
                reslove({username:"rohit",password:"123"})
             }
             else{
                reject('something went wrong')
             }   
        },'1000')
    })

    promiseFour
    .then((user)=>{
console.log(user);
return user.username
    })
    .then((username)=>{
console.log(username);

    })
    .catch((err)=>{
        console.log(err);
        
    })
    .finally(()=>console.log("the promise is either reslove or reject")
    )


    const promiseFive = new Promise((reslove,reject)=>{
        setInterval(function(){
            let error=false;
            if(!error){
               reslove({username:"javascript",password:"123"})
            }
            else{
               reject('js went wrong')
            }   
       },'1000')
    })


    async function consumepromiseFive(user1){
       try {
        const response=await promiseFive
        console.log(response.username);
       } catch (error) {
        console.log(error);
        
        
       }
       
    }

consumepromiseFive()


// async function getalluser(){
//      try {
//         const response=await fetch('https://jsonplaceholder.typicode.com/users')
//      //console.log(response);
//      const data=await response.json()
//      console.log(data);
//      } catch(err){
//         console.log("E:",err);
        
//      }
      
// }
    
// getalluser()


fetch('https://api.github.com/users/hiteshchoudhary')
.then((response)=>{
return response.json()
})
.then((data)=>{
    console.log(data);
    
    
}).catch((error)=>{
console.log(error);

})