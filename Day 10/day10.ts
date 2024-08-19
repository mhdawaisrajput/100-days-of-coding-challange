// 🚀 *Day 10 Challenge: Start Coding!* 🚀 

// Question 28:
let age: number = 25;

if (age < 2) {
  console.log("The person is a baby.");
} else if (age < 4) {
  console.log("The person is a toddler.");
} else if (age < 13) {
  console.log("The person is a kid.");
} else if (age < 20) {
  console.log("The person is a teenager.");
} else if (age < 65) {
  console.log("The person is an adult.");
} else {
  console.log("The person is an elder.");
};

// Question 29:
const favorite_fruits : string[] = ["Apple", "Mango", "Peach"];
if (favorite_fruits[0] === "Apple"){
    console.log("You really like Apples.!")     // true.
};
if (favorite_fruits.includes("Mango")){
    console.log("You really like Mango.!")      // true.
};
if (favorite_fruits[2] === "Peach"){
    console.log("You really like Peach.!")      // true.
};
if (favorite_fruits[3] === "Grapes"){
    console.log("You really like Grapes.!")     // false.
};
if (favorite_fruits[4] === "Bananas"){
    console.log("You really like Bananas.!")    // false.
};

// Question 30:
let userNames: string[] = ["Admin", "User1", "User2", "User3", "User4"];
userNames.forEach(userNames => {
    if (userNames === "Admin"){
        console.log("Hello admin, would you like to see a status report?")
    } else {
        console.log(`Hello ${userNames}, thank you for loggin in again.`)
    }
});