"use strict";
// 🚀 Day 18 Challenge: Start Coding! 🚀
// Question 52: Make a Smartphone Object: Create a simple way to keep track of a smartphone's details. Include its brand, model, and 
// other key features like how much storage it has, the size of its screen, and how long its battery lasts.
let smartphone = {
    brand: "Samsung",
    model: "S22 Ultra",
    specification: {
        Storage: "256 Gb",
        screenSize: "6.9 inches",
        batteryLife: "20h"
    }
};
console.log(smartphone);
// Question 53: Pulling Apart a Nested Object: Imagine you have a list inside another list that shows what a computer programmer knows, 
// like coding language's, tool's, and software frameworks'. Find a way to get three specific skills from this list and show them.
let aboutProgrammar = {
    code_language: "Javascript, Html, Python",
    tools: "Git, Docker",
    software_frameworks: "React, Angular",
};
let { code_language, tools, software_frameworks } = aboutProgrammar;
console.log(`Code_Language: ${code_language}, tools: ${tools}, Software_Framework: ${software_frameworks}`);
// Question 54: Making Flexible Object Keys: Learn how to set up a list where you can change the name of each section based on what you need at that moment, 
// like adjusting labels based on user choices.
// A way to make a flexible list
function dynamicKey(key, value) {
    let dynamcicObject = {};
    // Setting up a section in the list with a changeable name.
    dynamcicObject[key] = value;
    return dynamcicObject;
}
;
// Using the flexible list setup for a user's preference
let userChice1 = dynamicKey("Coffee", "Espresso");
console.log(userChice1);
let userChice2 = dynamicKey("Tea", "GreanTea");
console.log(userChice2);
let userChice3 = dynamicKey("Food", "Pizza");
console.log(userChice3);
