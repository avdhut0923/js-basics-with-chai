// function addTwoNum(num1 , num2){
//     console.log(num1 + num2);
// }

// addTwoNum(3,5);

function addTwoNum(num1 , num2){
    return (num1 + num2);
}

const result = addTwoNum(3,55);
// console.log(result);

function loginUserMessage(username = "sadhak") // defalt name is case undefined argument // no argument
{
    if(!username){
        console.log("please enter a username ") ;
        return;
    }
    return `${username} just logged in `;

}
// console.log(loginUserMessage());
// console.log(loginUserMessage("bhagwan"));

function calculateCartPrice1 ( ...num1)
{
    return num1
}
// console.log(calculateCartPrice1(200,400,300,50000,3990.3));

function calculateCartPrice (val1 ,val2 , ...num1)
{
    return num1
}
// console.log(calculateCartPrice(200,400,300,50000,3990.3));

const user = {
    userName : "hitesh",
    prices: 199
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.userName} and price is ${anyobject.prices}`)
}
handleObject(user);