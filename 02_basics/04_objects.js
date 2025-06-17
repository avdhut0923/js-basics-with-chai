// const wariUser = new Object() // singlton 

const aWariUser = {}

aWariUser.id = "123lp";
aWariUser.name = "tukaram";
aWariUser.isLoggedIN = true;

console.log(aWariUser);

const kWariUser = {
    email : "bhakti@gmail.com",
    fullname : {
        userFullName:{
            firstName : "Avdhut",
            lastName : "Patil",
        }
    }
}
// console.log(kWariUser.fullname.userFullName.lastName);

const obj1 = {1: "A", 2: "B"};
const obj2 = {3: "C", 4: "D"};
const obj3 = {5: "E", 6: "F"};

// const obj4 = {obj1,obj2};
// console.log(obj4);// isse obj ke andar obj ata hai // nested obj ban jate hai 

const obj5 = Object.assign({}, obj1 , obj2, obj3);//keys should be unique
// console.log(obj5)

const obj6 = {...obj1,...obj2,...obj3}// we use this spread operator most of the time 
// console.log(obj6)

const user1s = [
    {
        id: 1,
        email: "jaishreeRam@wari.com"
    },
    {
        id: 2,
        email: "anotherUser@example.com"
    }
    ,
    {
        id: 3,
        email: "anotherUser@example.com"
    }

];

// console.log(user1s[1].email)


console.log(aWariUser);

console.log(Object.keys(aWariUser));
console.log(Object.values(aWariUser));
console.log(Object.entries(aWariUser));// rarely used

console.log(aWariUser.hasOwnProperty('isLoggedIN'))