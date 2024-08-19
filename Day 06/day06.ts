/* 🚀 *Day 6 Challenge: Start Coding!* 🚀 */

/*
Question 16 : More Guests: You just found a bigger dinner table, so now more space is available. 
Think of three more guests to invite to dinner.
*/

console.log("Great News, we are adding more guest.!");
// Previous Exercise 15.
let list: string[] = ["Shahid", "Junaid", "Saif"];
// Adding more guest in starting, middle and the end of the array.
list.unshift("Asad");
list.splice(list.length / 2, 0, "Awais");
list.push("Shoaib");
list.forEach((list) => {
  console.log(`Hello Mr.${list}, You are invited for a dinner at tonight!`);
});

/*
Question 17 : Shrinking Guest List: You just found out that your new dinner table won’t arrive in 
time for the dinner, and you have space for only two guests.
*/

console.log(
  "Unfortunately, Our new table won't arrive in time for the dinner. So we have only two peple space for dinner!"
);
let unableToAttend: string[] = ["Asad", "Shahid", "Junaid", "Awais"];
unableToAttend.forEach((unableToAttend) => {
  console.log(
    `Sorry Mr.${unableToAttend}, You are unable to attend the dinner`
  );
});

let newGuest: string[] = ["Saif", "Shoaib"];
newGuest.forEach((newGuest) => {
  console.log(`Hello Mr.${newGuest}, You are still invited for dinner.!`);
});
newGuest.pop();
newGuest.pop();
console.log(newGuest);

/* Second Method : */
let previousList: string[] = [
  "Asad",
  "Shahid",
  "Junaid",
  "Awais",
  "Saif",
  "Shoaib",
];
while (previousList.length > 2) {
  let removeGuest = previousList.pop();
  console.log(`Sorry Mr.${removeGuest}, You are unable to attend the dinner`);
}

previousList.forEach((previousList) => {
  console.log(`Hello Mr.${previousList}, You are still invited for dinner.!`);
});

previousList.splice(0, previousList.length);
console.log(previousList);

/*
Question 18 :  Seeing the World: Think of at least five places in the world you’d like to visit.
*/

// original order.
let locationsToVisist: string[] = [
  "Saudi Arabia",
  "Dubai",
  "London",
  "America",
  "Turkey",
];
console.log("Original order:", locationsToVisist);

// alphabetical order
console.log("Alphabetical order:", [...locationsToVisist].sort());

// original order
console.log("Original order:", locationsToVisist);

// reverse alphabetical order
console.log(
  "Reverse Alphabetical order:",
  [...locationsToVisist].sort().reverse()
);

// original order
console.log("Original order:", locationsToVisist);

// Reverse the order of your list.
locationsToVisist.reverse();
// order has changed.
console.log("Reverse Order:", locationsToVisist);

// Reverse the order of your list again.
locationsToVisist.reverse();
// back to its original order.
console.log("Original Order:", locationsToVisist);

locationsToVisist.sort(); // Sort array so it’s stored in alphabetical order.
console.log("Alphabetical order:", locationsToVisist); //  order has been changed.

// Sort to change your array so it’s stored in reverse alphabetical order.
locationsToVisist.reverse();
// order has changed.
console.log("Reverse Alphabetical order:", locationsToVisist);