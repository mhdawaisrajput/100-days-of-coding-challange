// 🚀 *Day 16 Challenge: Start Coding!* 🚀 

// Question 46:
const laptop = {
    make: "HP",
    model: "840 G-Series",
    year: "2020",
    decribe: function(){
        console.log(`This ${this.make} laptop, model ${this.model}, was manufactured in ${this.year} `);
    }
};
laptop.decribe();

// Question 47:
let more_laptops = [
    {make: "Dell", model: "Latitude e7440", year: "2016"},
    {make: "Dell", model: "Latitude e7440", year: "2016"},
    {make: "Dell", model: "Latitude e7440", year: "2016"},
];
let [laptop1, laptop2] = more_laptops;
console.log(laptop1);
console.log(laptop2);

// Question 48:
let pair_1: number[] = [12000, 15000, 11000];
let pair_2: number[] = [10000, 13000, 16000];

let compare_prizes = [...pair_1, ...pair_2].sort((a, b) => a - b);
console.log(compare_prizes);