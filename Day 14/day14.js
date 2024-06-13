"use strict";
// 🚀 Day 14 Challenge: Start Coding! 🚀
// Question 40: Album: Write a function called make_album() that builds a Object describing a music album. The function should take 
// in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to 
// make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information 
// correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line 
// includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes 
// the number of tracks on an album.
// Function including with artist name and an album title.
function make_album(artist, title) {
    let album = { artist, title };
    return album;
}
console.log(make_album("Atif Aslam", "Tajdare Haram"));
console.log(make_album("Arjit Singh", "Channa Mereya"));
console.log(make_album("Nusrat Ali", "Hai Kahan Ka Iraada"));
// Function including with artist name and an album title and also number of tracks on an album.
function another_album(artist, title, tracks) {
    let album2 = { artist, title, tracks };
    if (tracks) {
        tracks = album2["tracks"];
    }
    return album2;
}
console.log(another_album("Kaife Khalil", "Kahani Suno", 2.0));
// Note : Difference's between this two answer's are :
// If we add trackes parameter in first answer: like let album = { artist, title, trackes}; then answer should be like these:
// { artist: 'Atif Aslam', title: 'Tajdare Haram', tracks: undefined }
// { artist: 'Arjit Singh', title: 'Channa Mereya', tracks: undefined }
// { artist: 'Kaife Khalil', title: 'Kahani Suno', tracks: 2 }
// Question 41: Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name 
// of each magician in the array.
let magicians = ["David Blaine", "Harry Houdini", "David Copperfield"];
function show_magicians(magicians) {
    magicians.forEach(magician => {
        console.log(magician);
    });
}
show_magicians(magicians); // [ 'David Blaine', 'Harry Houdini', 'David Copperfield' ]
// Question 42: Great Magicians: Start with a copy of your program from Exercise 41. Write a function called make_great() that 
// modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list 
// has actually been modified.
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " is the Great Magician";
    }
}
;
make_great(magicians); // Modifies the original array
show_magicians(magicians); // Shows modified names in array
