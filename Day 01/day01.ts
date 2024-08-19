/* 🚀 *Day 1 Challenge: Start Coding!* 🚀 */

/*
Question 1 : Insttall Node.js, Typescript, and VS Code on ypur computer/laptop.
Ans : Done.
*/

/*
Question 2 :  Personal Message: Store a person’s name in a variable and print a message to them, like “Hello Asharib, would you like to learn some TypeScript today?”
*/

let myName = "Asharib";
console.log(`"Hello ${myName}!,would you like to learn some TypeScript today?” `);

/*
Question 3 : Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
*/

let person = "MhD aWaIs";
console.log(person.toLowerCase());
console.log(person.toUpperCase());

/* First Method : */
console.log(person[0].toUpperCase() + person.slice(1, 3).toLocaleLowerCase() + person[3] + person[4].toUpperCase() + person.slice(5, 10).toLowerCase());

/* Second Method : */
console.log(person.charAt(0).toUpperCase() + person.slice(1, 3).toLocaleLowerCase() + person.charAt(3) + person.charAt(4).toUpperCase() + person.slice(5, 10).toLowerCase());

/* Third Method : */
console.log(person.slice(0, 1).toUpperCase() + person.slice(1, 3).toLocaleLowerCase() + person.slice(3, 4) + person.slice(4, 5).toUpperCase() + person.slice(5, 10).toLowerCase());