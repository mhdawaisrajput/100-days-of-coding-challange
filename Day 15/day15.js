"use strict";
// 🚀 Day 15 Challenge: Start Coding! 🚀
// Question 43: Unchanged Magicians: Start with your work from Exercise 42. Call the function make_great() with a copy of the array 
// of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call 
// show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each 
// magician’s name.
// Previous Exercise 41.
let magicians = ["David Blaine", "Harry Houdini", "David Copperfield"];
function show_magicians(magicians) {
    magicians.forEach(magician => {
        console.log(magician);
    });
}
show_magicians(magicians);
// Start with your work from Exercise 42.
let copied_magicians = ["David Blaine", "Harry Houdini", "David Copperfield"];
function make_great(copied_magicians) {
    let greatMagicians = [];
    copied_magicians.forEach(copied_magicians => {
        greatMagicians.push(`The Great ${copied_magicians}`);
    });
    return greatMagicians;
}
;
let greatMagicians = make_great(copied_magicians.slice());
console.log(">>>Original Magicians<<<");
show_magicians(copied_magicians); // Shows original names
console.log(">>>The Great Magicians<<<");
show_magicians(greatMagicians); // Shows modified names
// Question 44: Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one 
// parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being 
// ordered. Call the function three times, using a different number of arguments each time.
function sandwich(...items) {
    console.log(`Making a sandwich with ${items.join(" + ")}.`); // join will add space between arguments.
}
;
sandwich("Kabab", "cheese");
sandwich("turkey", "lettuce", "tomato");
sandwich("avocado", "sprouts", "mustard", "mayo");
// Question 45: Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer 
// and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and 
// two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information 
// was stored correctly.
function make_car(manufacturer, model, ...options) {
    let car = { manufacturer, model };
    options.forEach(([key, value]) => car[key] = value);
    return car;
}
console.log(make_car("kia", "Sportage", ["color", "white"], ["year", 2023]));
console.log(make_car("audi", "Gt etron5", ["color", "black"], ["abs:", true]));
