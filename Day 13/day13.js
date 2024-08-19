"use strict";
// 🚀 *Day 13 Challenge: Start Coding!* 🚀 
// Question 37:
function shirt(size = "Large", message = "I Love Typescript") {
    console.log(`Make a "${size}" size shirt with the message "${message}" printed on it.!`);
}
;
shirt(); // Default size and message.
shirt("Medium"); // Default message, but different size.
shirt("Small", "Code is Life"); // Different size and message.
// Question 38.
function describe_city(city, country = "Pakistan") {
    console.log(`${city} is in ${country}`);
}
;
describe_city("Lahore");
describe_city("Islamabad");
describe_city("Istanbul", "Turkey");
// Question 39:
function city_country(city, country) {
    return `${city} + ${country}`;
}
console.log(city_country("Lahore", " Pakistan"));
console.log(city_country("Karachi", " Pakistan"));
console.log(city_country("Islamabad", " Pakistan"));
