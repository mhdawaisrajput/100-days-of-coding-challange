"use strict";
// 🚀 Day 12 Challenge: Start Coding! 🚀
// Question 34: Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a 
// for loop to print the name of each pizza.
// Method 01.
let pizzas = ["Margherita Pizza", "Mozzarella Pizza", "Provolone Pizza"];
pizzas.forEach(pizzas => {
    if (pizzas === "Margherita Pizza") {
        console.log("I like Margherita Pizza.!");
    }
    else if (pizzas === "Mozzarella Pizza") {
        console.log("I like Mozzarella Pizza.!");
    }
    else if (pizzas == "Provolone Pizza") {
        console.log("I like Provolone Pizza.!");
    }
});
console.log("I really love  pizza!");
//Method 02.
pizzas.forEach(pizzas => {
    console.log(`I like ${pizzas}.!`);
});
console.log("I really love  pizza!");
// Question 35: Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals 
// in a list, and then use a for loop to print out the name of each animal.
let animals = ["Cat", "Dog", "Horse"];
animals.forEach(animals => {
    console.log(`A ${animals} would make a great pet.`);
});
console.log("Any of these animals would make a great pet!");
// Question 36: T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on 
// the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
// Method 01.
function make_shirt() {
    let size = "medium";
    let message = "Code is Life";
    console.log(`Making a ${size} t-shirt with a message "${message}" printed on it.!`);
}
;
make_shirt();
// Method 02.
function made_shirt(size, message) {
    console.log(`Making a ${size} t-shirt with a message "${message}" printed on it.!`);
}
;
made_shirt("medium", "Code is Life");
