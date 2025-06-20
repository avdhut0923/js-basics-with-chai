// const isLoggedIn = true;
// if(isLoggedIn){
//     console.log("bolo jai shree ram");

// }
// else console.log("koi baat nahi ")


// const balance = 2000 ;

// if(balance>200) console.log("you are allowed");

// if(balance<500) console.log("less than 500");
// else if(balance<1000) console.log("less than 1000");
// else if(balance<1500) console.log("less than 1500");
// else  console.log("less than 2500");


// const userLoggedIn = false;
// const debitCard = true ;
// const loggedInFromGoogle = false;
// const loggedInFromEmail = true;

// if(userLoggedIn && debitCard && 2==2 ){
//     console.log("allow to buy course");
// }else
// {
//     console.log("you are not allowed")
// }
// if(userLoggedIn || loggedInFromEmail){
//     console.log("user is logged in ");
// }



// const month = "2";

// switch (month){//if we dont use break // in case of successful execution of any cases exexution is going on till end execpt for default (fall through)
//     case "sep":
//         console.log("month is september");
//         break;
//     case "aug":
//         console.log("month is augest");
//         break;
//     case "jan":
//         console.log("month is january");
//         break;
//     case "feb":
//         console.log("month is february");
//         break;
//     default : 
//       console.log("something is wrong there")    ;
// }



const userEmail = [];
if(userEmail){
    console.log("got user email");
}
else {
    console.log("don't have user email");

}

// falsy values 

// false , 0 , -0, BigInt 0n , null , undefined , NaN

// rest all are truthy 

// "false" , "0"," " , [] , {}  , function() {} etc....


// to check empty array 
if(userEmail.length === 0 ){
    // console.log("array is empty") ;
}

// to check empty object
const obj = {}

if(Object.keys(obj).length === 0 ){
        console.log("object is empty") ;

}

// NUllish Coalescing Operator (??):null,undefined 

let val1 ;
val1  = 5 ?? 10;
// console.log(val1)

val1 = null ?? 10;
// val1 = undefined ?? 15;
// console.log(val1)

//TERNIARY OPERATOR
const iceTeaPrice = 100;
// iceTeaPrice <=80 ? console.log("buy it") : console.log("dont buy")
