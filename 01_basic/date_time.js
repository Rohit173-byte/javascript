/*

const date = new Date();
console.log(date);
console.log(date.toString());
console.log(date.toDateString());
console.log(date.toISOString());   
const mydate = new Date(2024,0,23,12,23);
console.log(mydate.toDateString());
console.log(mydate.toLocaleString());
console.log(typeof("25-01-2024".toLocaleString()));
 const mytimestamp= Date.now();
 console.log(mytimestamp);
 console.log(mydate.getTime()); // milisec
 console.log(Math.floor(Date.now()/1000));  // sec   */
const newdate= new Date();
 console.log(newdate.toLocaleString("default",{
  month:"numeric", minute:"2-digit"
 }));