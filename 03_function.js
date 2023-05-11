



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