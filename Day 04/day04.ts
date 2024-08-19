/* 🚀 *Day 4 Challenge: Start Coding!* 🚀 */

/*
Question 10 : Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. 
If you don’t have anything specific to write because your programs are too simple at this point, just add your 
name and the current date at the top of each program file. Then write one sentence describing what the program does.
*/

/* Awais, 2024-06-04.
This program prints a personal message. */
let myName: string = "Awais";
console.log(`Hello ${myName}, would you like to learn some TypeScript today?`);

/*
Question 11: Names: Store the names of a few of your friends in a array called names. Print each person’s name by 
accessing each element in the list, one at a time.
*/

let friends : string[] = ["Shahid", "Ali Hyder", "Junaid"];

/* First Method : */
console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);

/* Second Method : */
for(let i = 0; i < friends.length; i++){
    console.log(friends[i])
}

/*
Question 12 : Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, 
print a message to them. The text of each message should be the same, but each message should be personalized with the 
person’s name.
*/

let sameFriends : string[] = ["Shahid", "Ali Hyder", "Junaid"];

/* First Method : */
let message1 = `Hello ${sameFriends[0]}, would you like to learn some TypeScript today?`;
console.log(message1);
let message2 = `Hello ${sameFriends[1]}, would you like to learn some TypeScript today?`;
console.log(message2);
let message3 = `Hello ${sameFriends[2]}, would you like to learn some TypeScript today?`;
console.log(message3);

/* Second Method : */
let $message =  `would you like to learn some TypeScript today?`
console.log(`Hello` + " " + sameFriends[0] + ", " + `${$message}`);
console.log(`Hello` + " " + sameFriends[1] + ", " + `${$message}`);
console.log(`Hello` + " " + sameFriends[2] + ", " +  `${$message}`);

/* Third Method : */
for (let i of sameFriends){
    console.log(`Hello ${i}, would you like to learn some TypeScript today?`)
};