



function squareOfWordLength(one){
    var stringName = "JavaScript";
    var stringLength = stringName.length;
    var square = stringLength*stringLength;

    var stringNameTwo = "Google Chrome";
    var stringLengthOne = stringNameTwo.length;
    var squareOne = stringLengthOne*stringLengthOne;

    var stringNameThree = "Developer Smart";
    var stringLengthTwo = stringNameThree.length;
    var squareTwo = stringLengthTwo*stringLengthTwo;
    console.log(`1.1 Given String Is-- "JavaScript"`);
    console.log(`Length Of Words is --${stringLength}   String Length Square is--${square}`);
    console.log(`1.2 Given String Is-- "Google Chrome"`);
    console.log(`Length Of Words is --${stringLengthOne}   String Length Square is--${squareOne}`);
    console.log(`1.3 Given String Is-- "Developer Smart"`);
    console.log(`Length Of Words is --${stringLengthTwo}   String Length Square is--${squareTwo}`);
}
squareOfWordLength();

console.log("                                                                                      ");
function givenString(){
    var stringName = "I Am Angular Developer";
    var stringLength = stringName.length;
    var result = stringName.split(" ");
    var totalWords = result.length;
    var divResult = stringLength / totalWords;
console.log(`2.1 Given String Length is--${stringLength}   Division Of String Length By words Is--${divResult}`);
}
givenString();

function givenStr(){
    var stringName = "I Am Angular Developer";
    var stringLength = stringName.length;
    var result = stringName.split(" ");
    var totalWords = result.length;
    var mulResult = stringLength * totalWords;
    console.log(`2.2 Given String Length is--${stringLength}   Multiplication Of String Length By words Is--${mulResult}`);
}
givenStr();

