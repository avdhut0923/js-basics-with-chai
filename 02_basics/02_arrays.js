const hero1 = ["Rm","krihn", "hri"];
const hero2 = ["hr","mhev", "hkti"];

// hero1.push(hero2);

console.log(hero1);

// const allHeros = hero1.concat(hero2);
// console.log(allHeros);

const all_new_Heros = [...hero1,...hero2];
console.log(all_new_Heros);

const rry3 = [1,2,34,[2,3,6,7,[3,6,54,3],4,5,6],3,4,9,8];

const rel_rry = rry3.flat(Infinity); // new 
console.log(rel_rry);

console.log(hero1.isArray("Rm"))