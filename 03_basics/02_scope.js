var d = 300 
let a = 23;

if(true){

   let a = 2;
   const b = 3 ;
   var c = 8;
   d=20;
//    console.log("inner a: ",a);

}
     //  console.log(a)
     // console.log(b)
    // console.log(c) // problem
    // console.log(d) // this is also problem
    // console.log("outer a : ",a); 


// function one(){
//     const username = "jai shree Ram";

//     function two(){
//         const website = "RamRam@mukti.com";
//         console.log(username);
//     }
//     // console.log(website);
//     two();
// }    
// one();


if(true){
    const username = "hitesh";
    if(true){
        const website = " youtube";
        // console.log(username + website);
    }
    // console.log(website) // err

}
// console.log(username);// err

//hoisting
console.log(addone(4)) // here the concept of hoisting is under taken// so its working
function addone(num){
    return num + 1 ;
}

// console.log(addTwo(4)) // but not work here because the type of declaration is different here
const addTwo = function (num){
    return num + 2 ;
}