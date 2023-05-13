




var firstName = "Ashwini";
var lastName = " Jadhav";
var firstNameLength = firstName.length;
console.log("Total Num of Char in given string is=",firstNameLength);

var charAtZeroIndex = firstName.charAt();
console.log("Char At Zero Index - ",charAtZeroIndex);

var charAtLastIndex = firstName.charAt(firstName.length-1);
console.log("Char At Last Index - ",charAtLastIndex);

var concatString = firstName.concat(lastName);
console.log("Concat Result:",concatString);


var greet = "Good Morning";
var includeResult = greet.includes("ing");
console.log("Is ing string available inside : ", includeResult);

var searchResult = greet.search("Mor");
console.log("Search result : ", searchResult);

var sliceResult = greet.slice(4, 6);
console.log("Slice Result is: ", sliceResult);

var subStringResult = greet.substring(4, 6);
console.log("Substring result is: ", subStringResult);

var greet = "Good Morning mate, How are you";
var resultSplit = greet.split(" ");
console.log(resultSplit);
console.log("Total number of words: ",resultSplit.length);

var resultSplit = greet.split(",");
console.log(resultSplit);
console.log("Total number parts: ",resultSplit.length);

var resultSplit = greet.split("");
console.log(resultSplit);
console.log("Total number of words: ",resultSplit.length);

var subStringResult = greet.substring(4,6);
console.log("Result of Substring Is :",subStringResult);