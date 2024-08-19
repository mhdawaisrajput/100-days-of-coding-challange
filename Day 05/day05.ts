/* 🚀 *Day 5 Challenge: Start Coding!* 🚀 */

/*
Question 13 : Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and 
make a list that stores several examples. Use your list to print a series of statements about these items, such 
as “I would like to own a Honda motorcycle.”
*/

/* First Method : */
let transportation : string[] = ["MotorCycle", "Car", "Train"];
console.log(`I would like to own a ${transportation[0]}.”`);
console.log(`I would like to own a ${transportation[1]}.”`);
console.log(`I would like to own a ${transportation[2]}.”`);

/* Second Method : */
transportation.forEach(transportation => {
    console.log(`I would like to own a ${transportation}.”`)
});

/*
Question 14 : Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a 
list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to 
each person, inviting them to dinner.
*/

let list : string[] = ["Shahid", "Junaid", "Amar"];
list.forEach(list => {
    console.log(`Hello Mr.${list}, You are invited for a dinner at tonight!`)
});

/*
Question 15 : Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send 
out a new set of invitations. You’ll have to think of someone else to invite.
*/

/* First Method : */
console.log(`Sorry, Mr.${list[2]} is not joining us for tonight dinner!`)

// Remove Amar from the list.
list.pop();     

// Replace the guest
list.push("Saif");

list.forEach(list => {
    console.log(`Hello Mr.${list}, You are invited for a dinner at tonight!`)
});


/* Second Method : */
let unableToAttend = "Amar";
console.log(`Sorry, Mr.${list[2]} is not joining us for tonight dinner!`);

// Replace the guest
let newGuest = "Saif";
list[list.indexOf(unableToAttend)] = newGuest;

// New invitations
list.forEach(list => {
    console.log(`Hello Mr.${list}, You are invited for a dinner at tonight!`)
});