const firstName = Symbol();
const lastName = Symbol();

const person = {};
person[firstName] = "adan";
person[lastName] = "pradana";

console.log(person);
console.log(person[firstName]);
