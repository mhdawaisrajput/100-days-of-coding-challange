"use strict";
/* 🚀 *Day 8 Challenge: Start Coding!* 🚀 */
/*
Question 22 : Intentional Error: If you haven’t received an array index error in one of your
programs yet, try to make one happen. Change an index in one of your programs to produce an
index error. Make sure you correct the error before closing the program.
*/
let fruits = ["Mango", "Banana", "Orange"];
console.log(fruits[3]); // Intentional error: Arrays are zero-indexed, so index 3 is out of bounds.
console.log(fruits[2]);
/*
Question 23 :Conditional Tests: Write a series of conditional tests. Print a statement describing each
test and your prediction for the results of each test. Your code should look something like this:
*/
let bike = "Honda";
console.log("Is Bike === Honda, I predict true.!");
console.log(bike === "Honda");
let fruit = "Apple";
console.log("Is Fruit === Mango, I predict true.!");
console.log(fruit === "Orange");
/*
Question 24 : More Conditional Tests: You don’t have to limit the number of tests you create to 10. If
you want to try more comparisons, write more tests. Have at least one True and one False result for each
of the following:
*/
// Tests for equality and inequality with strings:
console.log("grapes" === "grapes"); // true.
// console.log("grapes" === "Grapes");  // false.
// Tests using the lower case function:
console.log("Grapes".toLowerCase() == "grapes"); // true.
console.log("Grapes".toLowerCase() == "Grapes"); // false.
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, 
// and less than or equal to :
console.log(6 === 6); // true.
// console.log(6 === 7);   // true.
console.log(10 > 5); // true.
console.log(10 < 5); // false.
console.log(10 <= 12); // true.
console.log(10 >= 12); // true.
// Tests using "and" and "or" operators :
console.log(true || false); // true
console.log(true && false); // false
// Test whether an item is in a array :
let food = ["Pizza", "Zingar", "Roll"];
console.log(food.includes("Pizza")); //true
// Test whether an item is in a array :
console.log(!food.includes("Burgar")); //true
