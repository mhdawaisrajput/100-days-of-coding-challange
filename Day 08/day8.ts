
// 🚀 Day 8 Challenge: Start Coding! 🚀

// Question 22: Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. 
// Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.

let foods : string[] = ["Pizza", "Zinger", "Broast"];
console.log(foods[3]); // undefined / Intentional error: Arrays are zero-indexed, so index 3 is out of bounds.
console.log(foods[0]); // Correcting the error by accessing a valid index.

// Question 23: Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for 
// the results of each test. Your code should look something like this:

let teacher = "Hamzah Syed";
console.log("If the teacher is 'Sir.Hamzah Syed', I predict it's true.!")
console.log(teacher == 'Hamzah Syed') // True.
console.log("If the teacher is not 'Sir.Hamzah Syed', I predict it's false.!")
console.log(teacher !== 'Hamzah Syed') // False.

let classIsOn = "Saturday"
console.log("If my class is on 'Saturday, I predict it's true.!")
console.log(classIsOn == 'Saturday') // True.
console.log("If my class is not on 'Saturday, I predict it's false.!")
console.log(classIsOn !== 'Saturday') // False.

let fruit = "Mango";
console.log("If the Fruit is 'Mango', I predict it's true.!")
console.log(fruit == 'Mango') // True.
console.log("If the Fruit is not 'Mango', I predict it's false.!")
console.log(fruit !== 'Mango'); // False.

let car = "Farrari";
console.log("If the car is 'Farrari', I predict it's true.!");
console.log(car == 'Farrari'); // True.
console.log("If the car is not 'Farrari', I predict it's false.!");
console.log(car !== 'Farrari'); // False.

let bike = "Yamaha";
console.log("If the bike is 'Yamaha', I predict it's true.!");
console.log(bike == 'Yamaha'); // True.
console.log("If the bike is not 'Yamaha', I predict it's false.!");
console.log(bike !== 'Yamaha'); // False.

// Question 24: More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more 
// comparisons, write more tests. Have at least one True and one False result for each of the following:

// Tests for equality and inequality with strings.
console.log("Testing equality with strings:");
console.log('Pizza' === 'Pizza') // True.
console.log('Pizza' !== 'Pizza') // False.

// Tests using the lower case function.
console.log("Tests using the lower case function");
console.log("Pizza".toLowerCase() === "pizza") // True.
console.log("Pizza".toLowerCase() !== "pizza") // False.

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to.
console.log(" Numerical tests involving equality and inequality");
console.log(10 > 5); // True.
console.log(10 < 5); // False.
console.log(10 >= 5); // True.
console.log(10 <= 5); // False.

// Tests using "and" and "or" operators.
console.log("Tests with 'and' and 'or':");
let truee = 10 > 5;
let falsee = 5 > 10
console.log (truee && falsee); // False.
console.log(truee || falsee); // True.

// Test whether an item is in a array.
let vegetables : string[] = ["Onion", "Lady Finger", "Tomoto"];
console.log("Test whether an item is in a array");
console.log(vegetables.includes("Tomoto")); // True.
console.log("Test whether an item is not in a array.");
console.log(vegetables.includes("Carrot")); // False.