"use strict";
// 🚀 *Day 14 Challenge: Start Coding!* 🚀 
// Question 40:
function make_album(artist, title, tracks) {
    let album = { artist, title };
    if (tracks) {
        album["tracks"] = tracks;
    }
    return album;
}
;
console.log(make_album("Atif Aslam", "Deewangi"));
console.log(make_album("Nusrat Fateh Ali Khan", "Dil Lagi"));
console.log(make_album("Attaulla Khan", "Bewafa", 12));
// Question 41:
let magicians_name = ["Derren Brown", "Lance Burton", "Harry Houdini"];
function show_magicians(magicians_name) {
    magicians_name.forEach(magicians_name => { console.log(magicians_name); });
}
;
show_magicians(magicians_name);
// Question 42:
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " the Great";
    }
}
make_great(magicians_name); // Modifies the original array.
show_magicians(magicians_name); // Shows modified names  
