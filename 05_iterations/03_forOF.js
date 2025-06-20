// for of 

// [ " "," "," "]
// [ {},{},{}]

const arr = [1,2,3,5,6]

for(const num of arr){
    console.log(num);
}

const greetings = "jai shree Ram";
for(const greet of greetings){
    if(greet==" ")continue;
    console.log(greet);
}

const map = new Map();
map.set('IN', "india")
map.set('USA', "united states of america")
map.set('Fr', "france")
map.set('IN', "india")

for(const [key,value] of map){
    console.log(key,`:-`,value)
}