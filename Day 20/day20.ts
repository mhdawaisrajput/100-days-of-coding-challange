
// 🚀 Day 20 Challenge: Start Coding! 🚀

// Question 58: Average Score Calculator: Write a simple program that can take lots of scores and find their average.

// This program calculates the average of all scores given
function averageScores(...scores: number[]) : number{
    // Adds all scores together and divides by the number of scores
    let totle = scores.reduce((scores, sum) => scores + sum, 0);
    return totle / scores.length
};
// Example: finding the average of four scores
console.log(averageScores(12, 15, 10, 25));
// We add up all the scores, then divide by how many there are.



// Question 59: Add a Special Number: Make a program that creates custom adders. These adders can add a specific number to any other
// number you give them later.

// This program makes a function that adds a specific number
function customAdders(numberAdd : number) : (number: any) => number {
    // This is the magic box. It takes a number and adds your special number to it
    return function (number : number) : number {
        return number + numberAdd
    }
};
// Making a magic box that adds 5
let addFive = customAdders(5);
console.log(addFive(12));
// We made a function (magic box) that adds 5 to any number.


// Question 60: Self-Running User Profile: Create a quick, self-setup profile for a user that can tell you the user's name and age.

// This profile sets itself up and can share info about the user

// This profile sets itself up and can share info about the user
let self_setup_profile = (function () {
    // The user's details are kept inside
    let name = "Muhammad Awais";
    let age = 23;
    // This part shares the user's details
    return {
        displayUserDetail: function() {
            console.log(`Name: ${name}, Age: ${age}`)
        }
    }
}) ();
// Asking the profile to tell us about the user
self_setup_profile.displayUserDetail(); // It says the user's name and age
// We made a self-setup profile that can talk about the user.