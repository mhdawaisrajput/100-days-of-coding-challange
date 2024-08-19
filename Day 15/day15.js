"use strict";
// 🚀 *Day 15 Challenge: Start Coding!* 🚀 
// Question 43:
let magicians_name = ["Derren Brown", "Lance Burton", "Harry Houdini"];
function make_great(magicians_name) {
    let greatMagicians = [];
    magicians_name.forEach(magicians_name => {
        greatMagicians.push(`The Great ${magicians_name}`);
    });
    return greatMagicians;
}
;
function show_magicians(magicians_name) {
    magicians_name.forEach(magicians_name => {
        console.log(`${magicians_name}`);
    });
}
;
let greatMagicians = make_great(magicians_name.slice());
console.log("Original Magicians :");
show_magicians(magicians_name);
console.log("Great Magicians Magicians :");
show_magicians(greatMagicians);
// Question 44:
function sandwich(...items) {
    console.log(`Making the Sandwich with: ${items.join(", ")}`);
}
;
sandwich("Kabab", "Mayonees", "Salad");
sandwich("Kabab", "Katchup", "Raita");
sandwich("Kabab", "Cheez", "Fries");
// Question 45:
function car(manufacter, model, ...options) {
    let car = { manufacter, model };
    options.forEach(([key, value]) => (car[key] = value));
    return car;
}
;
console.log(car("Honda", "Civic", ["colour", "White"], ["year", "2018"]));
console.log(car("Kia", "Sportage", ["colour", "Red"], ["year", "2023"]));
