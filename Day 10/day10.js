"use strict";
/* 🚀 *Day 10 Challenge: Start Coding!* 🚀 */
// Question 28:
// If the person is less than 2 years old, print a message that the person is a baby.
let personAge = 1.5;
if (personAge < 2) {
    console.log("The person is a Baby.!");
}
else {
    console.log();
}
;
// If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
personAge = 2;
if (personAge < 4) {
    console.log("The person is a Toddler.!");
}
else {
    console.log();
}
;
// If the person is at least 4 years old but less than 13, print a message that the person is a kid.
personAge = 4;
if (personAge < 13) {
    console.log("The person is a Kid.!");
}
else {
    console.log();
}
;
// If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
personAge = 13;
if (personAge < 20) {
    console.log("The person is a Teenager.!");
}
else {
    console.log();
}
;
// If the person is at least 20 years old but less than 65, print a message that the person is an adult.
personAge = 20;
if (personAge < 65) {
    console.log("The person is an Adult.!");
}
else {
    console.log();
}
;
// If the person is age 65 or older, print a message that the person is an elder.
personAge = 65;
if (personAge < 70) {
    console.log("The person is an Elder.!");
}
else {
    console.log();
}
;
// Question 29:
const favorite_fruits = ["Apple", "Mango", "Peach"];
if (favorite_fruits[0] === "Apple") {
    console.log("You really like Apples.!"); // true.
}
;
if (favorite_fruits.includes("Mango")) {
    console.log("You really like Mango.!"); // true.
}
;
if (favorite_fruits[2] === "Peach") {
    console.log("You really like Peach.!"); // true.
}
;
if (favorite_fruits[3] === "Grapes") {
    console.log("You really like Grapes.!"); // false.
}
;
if (favorite_fruits[4] === "Bananas") {
    console.log("You really like Bananas.!"); // false.
}
;
// Question 30:
let userNames = ["Admin", "User1", "User2", "User3", "User4"];
userNames.forEach(userNames => {
    if (userNames === "Admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log(`Hello ${userNames}, thank you for loggin in again.`);
    }
});
