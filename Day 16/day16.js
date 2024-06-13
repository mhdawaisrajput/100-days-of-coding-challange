"use strict";
// 🚀 Day 16 Challenge: Start Coding! 🚀
// Question 46: Enhanced Laptop Object: Construct an object for a laptop including properties make, model, year, and a method describe() 
// that logs a sentence about the laptop.
let laptop = {
    make: "Dell",
    model: "Latitude e7440",
    year: "2018",
    // Call a function in an object:
    describe: function () {
        console.log(`This Laptop is a ${laptop.year} ${laptop.make} ${laptop.model}`);
        // console.log(`This Laptop is a ${this.year} ${this.make} ${thismodel}`)
    }
};
laptop.describe();
// Question 47: Advanced Array Destructuring: Given an array of objects representing different laptops, each with properties make, model, 
// and year, use array destructuring to assign the first and second laptops to variables. Then, log these variables.
let laptops = [
    { make: "Dell", model: "Latitude", year: 2020 },
    { make: "Hp", model: "Elitebook", year: 2022 },
    { make: "Apple", model: "Mac-13", year: 2020 },
];
// Use Array Destructuring Method
let [laptop1, laptop2] = laptops;
console.log(laptop1);
console.log(laptop2);
// Question 48: Combining Arrays with Spread Operator: Suppose you're comparing prices of two different sets of laptops. Use the spread 
// operator to combine these arrays into a single array sorted in ascending order, then log the result.
let prizeSet1 = [40000, 28000, 35000];
let prizeSet2 = [45000, 25000, 50000];
let campare = [...prizeSet1, ...prizeSet2];
console.log(campare);
