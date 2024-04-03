// Question 10 Adding Comments:
// Muhammad Awais 4/3/2024
// This Program Print My Short Intro
let myIntro: string = "Muhammad Awais";
console.log(`My name is ${myIntro},and i am a student of GIAIC | Karachi`);

// Muhammad Awais 4/3/2024
// This Program is About My Daily Habits
let dailyHabit1: string = "I Wake Up Early in the Morning at 5.00 Clock";
let dailyHabit2: string = "I goto offer prayer" 
console.log(`${dailyHabit1} after it, ${dailyHabit2}`);

console.log("\n"); // this will add vertical space between two lines, when we run it

// Question 11: Names:
let names: string[] = ["Peter", "John", "Herry", "Clint", "Jackson", "Rock"];
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

console.log("\n");

// Question 12: Greetings:
let $names: string[] = ["Peter", "John", "Herry", "Clint", "Jackson", "Rock"];
for (let name of $names) {
    console.log(`Hello ${name}, You Know that You are a very humble person`);
}