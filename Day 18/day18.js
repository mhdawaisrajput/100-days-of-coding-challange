"use strict";
// 🚀 *Day 18 Challenge: Start Coding!* 🚀 
// Question 52:
let smartphoes = {
    brand: "Samsumg",
    model: "S20 Ultra",
    features: {
        storage: "256 Gb",
        size: "6.55",
        battery: "5000 mah",
    }
};
console.log(smartphoes);
// Question 53:
let developer_skills = {
    languages: ["Html", "Css", "Typescript"],
    tools: ["Git", "Webpack", "Docker"],
    framework: ["React", "Angular", "Vue"],
};
let { languages, tools, framework } = developer_skills;
console.log(`Language: ${languages[0]}, Tools: ${tools[0]}, FrameWork: ${framework[0]}}`);
// Question 54:
function createObjectWithDynamicKey(key, value) {
    let dynamicObject = {};
    dynamicObject[key] = value;
    return dynamicObject;
}
;
let userChoice = createObjectWithDynamicKey("theme", "light");
console.log(userChoice);
