"use strict";
// 🚀 *Day 11 Challenge: Start Coding!* 🚀 
// Question 31:
let userNames = [];
if (userNames) {
    console.log("We need to find some users!");
}
else {
    // No Users.
}
// Question 32:
let currentUsers = ["User1", "User2", "Admin", "User3", "User4"];
let newUsers = ["User5", "User6", "Admin", "User7", "User1"];
newUsers.forEach((newUsers) => {
    if (currentUsers.some((currentUsers) => currentUsers.toLowerCase() === newUsers.toLowerCase())) {
        console.log(`${newUsers} will need to enter a new username.`);
    }
    else {
        console.log(`${newUsers} is available.`);
    }
});
// Question 33: 
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers.forEach(numbers => {
    if (numbers == 1) {
        console.log("Number 1 = 1st");
    }
    else if (numbers == 2) {
        console.log("Number 2 = 2nd");
    }
    else if (numbers == 3) {
        console.log("Number 3 = 3rd");
    }
    else if (numbers == 4) {
        console.log("Number 4 = 4th");
    }
    else if (numbers == 5) {
        console.log("Number 5 = 5th");
    }
    else if (numbers == 6) {
        console.log("Number 6 = 6th");
    }
    else if (numbers == 7) {
        console.log("Number 7 = 7th");
    }
    else if (numbers == 8) {
        console.log("Number 8 = 8th");
    }
    else if (numbers == 9) {
        console.log("Number 9 = 9th");
    }
});
// OR:
numbers.forEach((numbers) => {
    let suffix = "th";
    if (numbers === 1) {
        suffix = "st";
    }
    else if (numbers === 2) {
        suffix = "nd";
    }
    else if (numbers === 3) {
        suffix = "rd";
    }
    console.log(`Number ${numbers} = ${numbers}${suffix}`);
});
