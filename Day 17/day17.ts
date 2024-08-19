// 🚀 *Day 17 Challenge: Start Coding!* 🚀 

// Question 49:
function hobbies(...hobbies: string[]){
    hobbies.forEach(hobbies => {
        console.log(`I enjoy ${hobbies}`)
    });
};
hobbies("Reading", "Playing", "Swimming");

// Question 50:
let activities = `My ideal day would for:
1. Waking up early and going for a running.
2. cooking food for siblings.
3. Ending the day by spending few hours with family.`
console.log(activities);

// Question 51:
function area(width: number, height: number){return width * height}
let calculate_area = (width: number, height: number): number => width * height;
console.log(calculate_area(5, 8));