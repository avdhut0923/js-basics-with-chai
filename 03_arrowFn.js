const user = {
    username : "ram",
    price : 999,

    welcomeMesg : function(){
        // console.log(`${this.username},Welcome to our website`);
        // console.log(this)
    }
}
user.welcomeMesg();
user.username = "krishna";
user.welcomeMesg();

        // console.log(this)


// function chai(){
//     let username = "mahadev";
//     console.log(this.username);

// }   
// chai ();  

let chai = function (){
    let username = "mahadev";
    // console.log(this.username);

}   
chai ();  

const func = () => {
     let username = "mahadev";
    // console.log(this.username);
}
func();




() => {}  // arrow fn basic syntax

//explicit arrow fn  

// const addtwo = (num1 , num2 ) => {
//     return num1 + num2;
// }
// console.log(addtwo(4,5));


// implicit arrow fn // dont have return key word

// const addtwo = (num1 , num2 ) =>  num1 + num2;
// or 
const addtwo = (num1 , num2 ) => ( num1 + num2);


console.log(addtwo(4,5));


// arrow functions for object 

const adddTo = (num1 , num2) => ({username : "jai Hari"});

