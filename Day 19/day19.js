"use strict";
// 🚀 Day 19 Challenge: Start Coding! 🚀
// Question 55: Double Numbers in an Array: Make a list of numbers. Then, use a trick to make a new list where each number is twice 
// its original value.
let numbers = [2, 4, 6, 8, 10];
let twiceNumbers = numbers.map(numbers => numbers * 2);
console.log(twiceNumbers);
// Question 56: Keep Only Strings: Given a mix of different types of items, make a new list that has only the words.
// A mixed bag of items
let mixItems = [1, "Motor_Cycle", 2, "Rolex_Watch", false, "Air_Pods", true, "Iphone_Max"];
//            number   string    number   string       boolean   string    boolean     string
// Picks out only the words (Keep Only Strings: as question said)
let words = mixItems.filter(mixItems => typeof mixItems === "string");
// Shows the list of just words
console.log(words);
// This line checks each item: if it's a word, it goes into the new list.
// Question 57: Find the Average Grade: Given a list of grades, calculate the average grade.
// Method : 01.
let gradeList = [50, 60, 70, 80, 90];
console.log((50 + 60 + 70 + 80 + 90) / 5); // 70.
// Method 02.
let grades = [60, 65, 70, 75, 80];
let average = grades.reduce((total, grades) => total + grades, 0) / grades.length;
console.log(average);
