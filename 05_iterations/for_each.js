const coding =["python","java","javascript","cpp"]
// coding.forEach(function (item){
//     console.log(item);
    
// })


// coding.forEach( (val)=>{
//     console.log(val);
    
// })


function printme(val){
//console.log(val);

}
coding.forEach(printme)


coding.forEach( (val,index,arr)=>{
    //console.log(val,index,arr);
    
})


const mycoding = [
    {
        name:"javascript",
        extension:"js"
    },
    {
        name:"python",
        extension:"py",
    },
    {
        name:"c++",
        extension:"cpp"
    }
]

mycoding.forEach((item)=>{
    console.log(item.name);
    console.log(`extension is ${item.extension}`);
    
})