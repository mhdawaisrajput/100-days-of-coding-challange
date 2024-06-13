"use strict";
// 🚀 Day 13 Challenge: Start Coding! 🚀
// Question 37: Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love 
// TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function make_shirt(size = "large", message = "I Love Typescript") {
    console.log(`Making a ${size} shirt with a message ${message} printed on it.`);
}
;
make_shirt(); // Default large and message
make_shirt("medium"); // medium shirt with default message.
make_shirt("small", "Dive into Coding"); // different size of shirt with different message.
// Question 38: Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should 
// print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for 
// three different cities, at least one of which is not in the default country.
function describe_city(city, country = "Pakistan") {
    console.log(`${city} is in ${country}`);
}
;
describe_city("Karachi", "Pakistan");
describe_city("Islamabad");
describe_city("Istanbul", "Turkey");
// Question 39: City Names: Write a function called city_country() that takes in the name of a city and its country. The function 
// should return a string formatted.
// Method 01.
function city_country(city, country) {
    return city + country;
}
;
let pair = city_country("Lahore", " Pakistan");
console.log(pair);
let pair2 = city_country("Tokyo", " Japan");
console.log(pair2);
let pair3 = city_country("New york", " USA");
console.log(pair3);
// Method 02:
function city_with_country(city, country) {
    return `${city} ${country}`;
}
;
console.log(city_with_country("Lahore", "Pakistan"));
console.log(city_with_country("Tokyo", " Japan"));
console.log(city_with_country("New york", " USA"));
