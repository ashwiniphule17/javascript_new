



function stringHandsOn(){
    var handsOn = "  Hey you are doing good,keep it up    ";
    console.log("Given string As It Is - ",handsOn);
}
stringHandsOn();
 
var handsOn ="  Hey you are doing good,keep it up    ";
var handsOnLength = handsOn.length;
console.log("Total num of string Length is :",handsOnLength);
console.log(".....................................................");

var handsOn ="  Hey you are doing good,keep it up    ";
var trimmedHandsOn = handsOn.trim();
var lengthAfterTrim = trimmedHandsOn.length;
console.log("After Trim Given String Is: ",trimmedHandsOn,trimmedHandsOn.length);
console.log("Trimmed Total Spaces-",handsOnLength-lengthAfterTrim);

console.log(".....................................................");

var handsOn ="Hey you are doing good,keep it up";
var charAtZeroIndex = handsOn.charAt();
var charAtLastIndex = handsOn.charAt(handsOn.length-1);
console.log("First Char & Last Char : ",charAtZeroIndex,charAtLastIndex);


