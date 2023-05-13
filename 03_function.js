



function show() {
    console.log("Show Function");
}
console.log("Before Function Call");
show();
console.log("After Function Call");
show();
show();

console.log("-----------------------------------");
var numOne = 100;
var numTwo = 200;

var firstName = "Bill Gates";
var secondName = "Elon Musk";

function swapVariabes(valueOne,valueTwo){
console.log("Before Swap : ",valueOne,valueTwo);
var temp = valueOne;
valueOne = valueTwo;
valueTwo = temp;
console.log("After swap : ",valueOne,valueTwo);
}

swapVariabes(numOne,numTwo);
swapVariabes(firstName,secondName);

console.log('................................');

function addition(num1, num2) {
    var result  = num1 + num2;// result = 300
    return result;
}
var returnValue = addition(100, 200);
console.log("Addition of number is: ", returnValue);
var returnResult = addition(890.400, 600.3456);
console.log("Addition of number is: ", returnResult);