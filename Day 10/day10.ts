
// 🚀 Day 10 Challenge: Start Coding! 🚀

// Question 28: // Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable 
// age, and then:

let ageOfPerson = 25;
if (ageOfPerson < 2) {
    console.log("The person is a baby.!");
} else if (ageOfPerson < 4 ) {
    console.log("The person is a toddler.!");
} else if (ageOfPerson < 13) {
    console.log("The person is a kid.!");
} else if (ageOfPerson < 20) {
    console.log("The person is a teenager.!");
} else if (ageOfPerson < 65) {
    console.log("The person is an adult.!");
} else {
    console.log("The person is an elder.!");
};

// Question 29: Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check 
// for certain fruits in your array.

let favorite_fruits : string [] = ["Apple", "Mango", "Cherry", "Banana", "Orange"];

if (favorite_fruits.includes("Apple")){
    console.log("You really like Apples!")
};
if (favorite_fruits.includes("Mango")) {
    console.log("You really like Mangos!");
};
if (favorite_fruits.includes("Cherry")) {
    console.log("You really like Cherrys!");
};
if (favorite_fruits.includes("Banana")) {
    console.log("You really like Bananas!");
};
if (favorite_fruits.includes("Orange")) {
    console.log("You really like Oranges!");
};

// Question 30: Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will 
// print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:

let userNames : string[] = ["Admin", "User1", "User2", "User3", "User4"];
userNames.forEach(userNames => {
    if (userNames === "Admin") {
        console.log("Hello admin, would you like to see a status report?");
    } else {
        console.log(`Hello ${userNames}, thank you for logging in again.`);
    }
});