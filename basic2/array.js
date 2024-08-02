//  //const myarr = [2,4,5,6];
// //console.log(myarr);
// /*
// const newarray = new Array(2,5,7,8,9,5,4,2);

// newarray.push(56)  // last 
// newarray.unshift(90) // first
// newarray.pop() // last
// newarray.shift() // first
// console.log(newarray.includes(90));  // return boolean type
// console.log(newarray.indexOf(90));  
// console.log(newarray.join());

// console.log(newarray);   */

// const mna = [2,4,6,7];
// console.log("A",mna);

// console.log("B",mna.slice(1,3));
// console.log(mna);                   // don't manupulate original array and last indx don't taken
 
// console.log("C",mna.splice(1,3));         
// console.log(mna);                    /// original array manupulation  and last index only taken 



//  const marvel_heroes = ["spiderman","ironman","thor"];
//  const dc_heroes = ["batman","superman","flash"];
//  const normal_heroes =["super nova","dr.strange"];
// const all_heroes= marvel_heroes.concat(dc_heroes);
// console.log(all_heroes); // but for combine all the heroes we want apply concat ones more for shortcut we us spread 
// const heroes = [...marvel_heroes,...dc_heroes,...normal_heroes]
// console.log(heroes);

// const another_array = [2,3,45,6,7,[6789,8]];
// console.log(another_array);
// const real_array = another_array.flat(Infinity);
// console.log(real_array);
console.log(Array.isArray("rohit"));
console.log(Array.from("rohit"));
console.log(Array.from({name:"rohit"}));  // important
   const num1= 23 , num2=56 , num3 = 56;
   console.log(Array.of(num1,num2,num3));
   



