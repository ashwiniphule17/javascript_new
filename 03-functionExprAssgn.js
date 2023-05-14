


var square = function(one){
    var squareResult = one*one;
console.log(`1.Square of 5 is - ${squareResult}`);
}
square(5);

var square = function(one){
    var squareResult = one*one;
console.log(`    Square of 6 is - ${squareResult}`);
}
square(6);

var square = function(one){
    var squareResult = one*one;
console.log(`    Square of 25is - ${squareResult}`);
}
square(25);

var square = function(one){
    var squareResult = one*one;
console.log(`    Square of 100 is - ${squareResult}`);
}
square(100);
console.log(".....................................................");

var square = function(one){ 
var typeOfFunction = typeof square;
console.log(`2. Type Of Square  - ${typeOfFunction}`);
}
square();
console.log(".....................................................");

var areaOfPlot = function(height,width){
    var result = height*width;
    console.log(`3. Area Of Plot = ${result}`);
}
areaOfPlot(499,917);
console.log(".....................................................");

console.log(`4. Swap Values---`);
 var swapValue = function(valueOne,valueTwo){
    console.log(` Before Swap :  `,valueOne,valueTwo);
var temp = valueOne;
valueOne = valueTwo;
valueTwo = temp;
console.log(` After swap  :  `,valueOne,valueTwo);
}
swapValue("Virat","Anushka");
swapValue(1000,  2000);
console.log(".....................................................");
 
console.log(`5. Given String -- "JS the most Popular language of Internet" `);
var givenString = function(){
    var result = "JS the most Popular language of Internet";
    var resultLength = result.length;
    console.log(`5.1 Total Num of Char in given string is- ${resultLength}`);
    var resultIndex = result.charAt(6);
    console.log(`5.2 Char At Index 6-  ${resultIndex}`);
    var resultIndex = result.charAt(11);
    console.log(`5.3 Char At Index 11-  ${resultIndex}`);
    var charAtLastIndex = result.charAt(result.length-1)
    console.log(`5.4 Char At Last Index- ${charAtLastIndex}`);
    var charAtFirstIndex = result.charAt();
    console.log(`5.5 Very First Char- ${charAtFirstIndex}`);
    var totalNumOfWords = result.split(" ");
    console.log(`5.6 Total Num Of Words- ${totalNumOfWords.length}`);
}
givenString();
var multiplication = function(one){
    var result = one*one;
    console.log(`5.7 Square of Total num of words - ${result}`);
}
multiplication(7,7);




