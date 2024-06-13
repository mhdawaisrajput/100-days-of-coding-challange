"use strict";
// 🚀 Day 17 Challenge: Start Coding! 🚀
// Question 49: Function with Rest Parameters: Write a function that takes a rest parameter representing multiple hobbies. It should 
// log each hobby with a statement saying you enjoy that hobby.
// Method 01:
function multipleHobbies(...hobbies) {
    console.log(`I enjoy ${hobbies}`);
}
;
multipleHobbies("Play Cricket");
multipleHobbies("Watch Movies");
multipleHobbies("Swimming");
// Method 02:
function logHobbies(...hobbies) {
    hobbies.forEach(hobby => {
        console.log(`I enjoy ${hobby}.`);
    });
}
logHobbies("Play Cricket", "Watch Movies", "Swimming");
// Question 50: Multiline Template Literals: Use template literals to create a multiline string that describes your ideal day. Include 
// at least three different activities.
let myIdealDay = `On my ideal day, I would perticipate in certain activities like
1. I wake up early and make BreakFast for me.!
2. I goto shop with my father and spend my time with him.!
3. Ending the day with watching movies.!`;
console.log(`${myIdealDay}`);
// Question 51: Refactoring to Arrow Functions: Take a simple function that calculates the area of a rectangle and refactor it into an 
// arrow function.
// Simple function that calculates the area of a rectangle:
function rectangle(width, height) {
    return width * height;
}
;
// Refactor it into an arrow function:
let totleAreaBYArrow = (width, height) => width * height;
let finalResult = totleAreaBYArrow(3.5, 4.7);
console.log(finalResult);
