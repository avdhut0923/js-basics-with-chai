let mydate = new Date();
// console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.toISOString());
// console.log(mydate.toJSON());
// console.log(mydate.toLocaleString());
// console.log(mydate.toLocaleTimeString());

// let mycreatedDate = new Date(2023 , 0, 23)
// let mycreatedDate = new Date(2023 , 0, 23,5,3)
// let mycreatedDate = new Date(2023 , 0, 23,5,3,1)
let mycreatedDate = new Date("01-14-2025")

console.log(mycreatedDate.toLocaleString())

let newDate = new Date();
// console.log(newDate);
// console.log(newDate.getMonth()+1)//to avoid 0 based indexing
// console.log(newDate.getDay())


let myTimestamp = Date.now();

console.log(myTimestamp);
 // Log the time in milliseconds since January 1, 1970
//    console.log(myTimestamp.getTime()); 
console.log(Math.floor(Date.now()/1000));

// let newDate = new Date();

newDate.toLocaleString('default',{
    weekday:"long",

})
console.log(newDate);



