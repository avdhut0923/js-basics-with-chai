const hero1 = ["Rm","krihn", "hri"];
const hero2 = ["hr","mhev", "hkti"];

// hero1.push(hero2);// pushes on array hero1 

console.log(hero1);

// const allHeros = hero1.concat(hero2); // concte and return results in new arary 
// console.log(allHeros);

const all_new_Heros = [...hero1,...hero2];
console.log(all_new_Heros);

const rry3 = [1,2,34,[2,3,6,7,[3,6,54,3],4,5,6],3,4,9,8];

const rel_rry = rry3.flat(Infinity); // new  // infinity is depth for blind but we can assign depth as 1,2,3,4,5 whatever we requird
console.log(rel_rry);

console.log(Array.isArray("jaiJaiShreeRam"));
console.log(Array.isArray("krishna"));
console.log(Array.from("krishna"));


let score1 = 100;
let score3 = 300;
let score2 = 200;

console.log(Array.of(score1,score2,score3));

