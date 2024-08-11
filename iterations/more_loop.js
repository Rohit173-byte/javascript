// for_of

let arr = [1,5,6,7,9,10]
for (const num of arr) {
   // console.log(`the value of array is ${num}`);
    
}

// let user = [{
//     firstname:"rohit",
//     lastname:"chamoli",
//     college:"gehu,"
// }, 70]
// for (const obj of user) {
//     console.log(`the detail of user is ${user}`);
    
// }             /// object is not iterable 
let name ="rohit_chamoli"
for (const value of name) {
    //console.log(`the value is ${value}`);
    
}

//////////// maps : contain unique values

const map = new Map()
map.set('IN',"INDIA")
map.set('USA',"UNITED STATE  OD AMERICA")
//console.log(map);

for (const [key,value] of map) {
    console.log(key ,"=>", value);
    
}