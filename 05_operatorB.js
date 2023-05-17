



var greaterNumber = function(numOne,numTwo){
    var numOne = 10;
    var numTwo = -10;
    var result = numOne>=numTwo ? "  Num One Is greater i.e--> 10" : "Num Two Is greater i.e.--> -10";
    console.log(`1.1 find Greater Num Between 10 & -10 `);
    console.log(`${result}`);
}
greaterNumber(10,-10);
var greaterNumber = function(numOne,numTwo){
    var numOne = 800;
    var numTwo = 899;
    var result = numOne>=numTwo ? "1.2 Num One Is grater i.e--> 800" : "  Num Two Is greater i.e.--> 899";
    console.log(`1.2 find Greater Num Between 800 & 899 `);
    console.log(`${result}`);
}
greaterNumber(800,899);
console.log(`-----------------------------------------------------------------------`);

console.log(`2 Check Given Numbers 29,44,0,101 EVEN or ODD`);

var isEvenOrOddNum = function(){
    var numOne = 29;
    var result = numOne%2 == 0 ? "29 is EVEN Num" : "29 Is ODD Num";
    console.log(`2.1--> ${result}`);

    var numOne = 44;
    var result = numOne%2 == 0 ? "44 is EVEN Num" : "44 Is ODD Num";
    console.log(`2.2--> ${result}`);

    var numOne = 0;
    var result = numOne%2 == 0 ? "0 is EVEN Num" : "0 Is ODD Num";
    console.log(`2.3--> ${result}`);

    var numOne = 101;
    var result = numOne%2 == 0 ? "101 is EVEN Num" : "101 Is ODD Num";
    console.log(`2.4--> ${result}`);
}
isEvenOrOddNum();
console.log(`-----------------------------------------------------------------------`);

console.log(`3.Given Strings Are --"JavaScript" , "Developer" , "Google"`);

var wordLength = function(){
    var name = "JavaScript";
    var resultLength = name.length;
    console.log(`3.1 Given String Length is-> ${resultLength}`);
    var resultEvenOdd = resultLength%2 == 0 ? "    Given String length is EVEN" : "Given String Length Is ODD";
    console.log(`${resultEvenOdd}`);
}
wordLength();

 var wordLength = function(){ 
    var name = "Developer";
    var resultLength = name.length;
    console.log(`3.2 Given String Length is-> ${resultLength}`);
    var resultEvenOdd = resultLength%2 == 0 ? "    Given String length is EVEN" : "    Given String Length Is ODD";
    console.log(`${resultEvenOdd}`);
}
wordLength();
var wordLength = function(){ 
    var name = "Google";
    var resultLength = name.length;
    console.log(`3.3 Given String Length is-> ${resultLength}`);
    var resultEvenOdd = resultLength%2 == 0 ? "    Given String length is EVEN" : "    Given String Length Is ODD";
    console.log(`${resultEvenOdd}`);
}
wordLength();