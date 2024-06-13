"use strict";
// // 🚀 Day 11 Challenge: Start Coding! 🚀
// // Question 31: No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// // Method 01.
// let userNames : string[] = [""];
// userNames.forEach(userNames => {
//     if (userNames === ""){
//         console.log("We need to find some users!");
//     }
//     else {
//         // Greet users
//     }
// });
// // Method 02.
// let user_names : string[] = [];
// userNames.forEach(userNames => {
//     if (user_names.length === 0){
//         console.log("We need to find some users!");
//     }
//     else {
//         // Greet users
//     }
// });
// // Question 32: Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a 
// // unique username.
// let current_user : string[] = ["admin", "user1", "user2", "user3", "user4"];
// let new_user : string[] = ["user5", "admin", "user6", "user2", "uer7"];
// new_user.forEach(new_user => {
//     if (current_user.some(current_user => current_user.toLowerCase() === new_user.toLowerCase() ))
//         console.log(`${new_user} will need to enter a new username.!`)
//     else (
//         console.log("New user is available.!")
//     )
// });
// // Question 33: Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers 
// // end in th, except 1, 2, and 3.
// let numbers : number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// numbers.forEach(numbers => {
//     if (numbers == 1){
//         console.log("1st")
//     } else if (numbers == 2){
//         console.log("2nd");
//     } else if (numbers == 3){
//         console.log("3rd");
//     } else if (numbers == 4){
//         console.log("4th");
//     } else if (numbers == 5){
//         console.log("5th");
//     } else if (numbers == 6){
//         console.log("6th");
//     } else if (numbers == 7){
//         console.log("7th");
//     } else if (numbers == 8){
//         console.log("8th");
//     } else if (numbers == 9){
//         console.log("9th");
//     }
// });
// Method 02.
let number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
number.forEach(number => {
    let suffix = "th";
    if (number === 1) {
        suffix = "st";
    }
    else if (number === 2) {
        suffix = "nd";
    }
    else if (number === 3) {
        suffix = "rd";
    }
    console.log(`${number}${suffix}`);
});
