function reverseString(str) {
let splitString = str.split (""); // let splitString = "Hello".split(""); // ["H","e","l","l","o"]
let reverseArray = splitString.reverse(); // let reverseArray = ["H","e","l","l","o"].reverse();
// ["o", "l", "l", "e", "H"]
let joinArray = reverseArray.join(""); // let joinArray = ["o", "l", "l", "e", "H"].join("");
// "olleH"
return joinArray; // "olleh"
}

let result = reverseString;
console.log(result);

