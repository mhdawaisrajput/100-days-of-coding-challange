
// 🚀 Day 6 Challenge: Start Coding! 🚀

// Question 16: More Guests: You've found a bigger dinner table, so there's room for more guests.

let moreGuest : string[] = ["Babar Azam","Shahid Afridi","Atif Aslam"];
console.log("Great news! I found a bigger dinner table!");

// Adding More Guest.
moreGuest.unshift("Humayoo Saeed");
moreGuest.splice(moreGuest.length / 2,0, "Ahad Raza");
moreGuest.push("Billal Abbas");
moreGuest.forEach(moreGuest => {
    console.log(`Dear ${moreGuest}, would you like to join me for dinner?`)
});

// Question 17: Shrinking Guest List: Unfortunately, your new table won’t arrive in time, and you can only invite two guests.

console.log("Unfortunately, Due to time Shortage, I can only invite two people for dinner,.");

while  (moreGuest.length > 2) {
    let removedGuest = moreGuest.pop();
    console.log(`Sorry, ${removedGuest}, I can't invite you to dinner.`);
};
moreGuest.forEach(moreGuest => {
    console.log(`Dear ${moreGuest}, you're still invited to dinner.`);
});
moreGuest.splice(0, moreGuest.length);
console.log(moreGuest); // Shows an empty list.

// Question 18: Seeing the World: Think of at least five places you’d like to visit.

let locations : string[] = ["Oman", "Bangaladesh", "Malaysia", "Saudi Arabia", "Turkey"];
console.log("Original Order :", locations);
console.log("Alphabetical Order :", [...locations].sort());
console.log("Original Order :", locations);
console.log("Reverse Alphabetical Order :", [...locations].sort().reverse());
console.log("Original Order :", locations);
console.log("Reverse Order :", locations.reverse());
console.log("Original Order :", locations.reverse());
console.log("Alphabetical Order :", [...locations].sort());
console.log("Reverse Alphabetical Order :", [...locations].reverse());