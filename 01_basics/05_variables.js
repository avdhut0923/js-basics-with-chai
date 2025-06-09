const name = "krishna";
const killcount = 50;

// console.log(`jai shri ram ${name.toUpperCase()} and your no. of kills are ${killcount}`)
//. we can use string propertites on the go with this string interpolation 

const gameName = new String('jai_shree_ram')

// console.log(gameName[5]);
// console.log(gameName.__proto__);

// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('m'));

const newString = gameName.substring(10,13)
// console.log(newString)

const newString2 = gameName.slice(-13,5)
// console.log(newString2)

const str = "  jai shree ram  ";
// console.log(str);
// console.log(str.trim());

const url = "https://jairamshreeram.com/jaijairam%20krishnahari"

console.log(url.replace('%20','-'))
console.log(url.includes('ram'))
console.log(gameName.split('_'))


