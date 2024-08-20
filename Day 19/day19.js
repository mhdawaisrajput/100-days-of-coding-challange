"use strict";
// Question 55:
let numbers = [2, 4, 6, 8];
let double_numbers = numbers.map((numbers) => numbers * 2);
console.log(double_numbers);
// Question 56:
const differentItems = [true, 5, "Handbag", false, 9, "Shoes"];
const onlyStrings = differentItems.filter((differentItems) => typeof differentItems === "string");
console.log(onlyStrings);
// Question 57:
let grades = [90, 70, 60, 50, 40];
let average = grades.reduce((total, grades) => total + grades, 0 / grades.length);
console.log(average);
