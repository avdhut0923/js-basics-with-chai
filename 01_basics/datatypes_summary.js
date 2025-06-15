const score = 200
const value = 23.9

const isLoggedIn = false
const outsideTemp = null
let usrEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);
// console.log(typeof(score))
// console.log(typeof(value))
// console.log(typeof(id))
// console.log(typeof(outsideTemp))

const bigNumber = 4099097654321n
// console.log(typeof(bigNumber))

const heros = ["Ram", "krishna", "Hari"];
let myObj = {
    name : "jai Hari",
    age : 125,
}

const myFunction = function(){
    console.log("jai jai ram jai jai ram jai jai ram krishna hari ")
}
myFunction();
console.log(typeof anotherId);

///////////////////////////////////////////////////////////////////////////


// stack (premeative) , heap (non premeative)

let myname = "ram";
let anotherName = myname;
anotherName = "Krishna";

console.log(myname);
console.log(anotherName);

///////////////////////////////

let userOne = {
    email: "user@googl.com",
    upi : "user@sbi,
};
let userTwo = userOne;
userTwo.email = "jaiJaiRam@moksh.com";

console.log(userOne.email);
console.log(userTwo.email);
