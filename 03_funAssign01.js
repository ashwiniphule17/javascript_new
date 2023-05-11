



console.log("1..");
function name(){
    var firstName = "Ashwini";
    var lastName = "Jadhav";
    console.log("Name - ",firstName,lastName);
}
name();
function degree(){
    var degree = "Electronics";
    console.log("Degree - ",degree);
}
degree();
console.log("                             ");

console.log("2.personalDetails");
function personalDetails(firstName,lastName,collegeName){
console.log("My Name - ",firstName,lastName);
console.log("College Name - JJMCOE");
}
personalDetails("Ashwini", " Jadhav"," JJMCOE");
console.log("                             ");

console.log("3.swipeValueDude");
function swapValueDude(valueOne,valueTwo){
    console.log("Before Swap : ",valueOne,valueTwo);
var temp = valueOne;
valueOne = valueTwo;
valueTwo = temp;
console.log("After swap : ",valueOne,valueTwo);
}
swapValueDude(" Virat"," Anushka");
console.log("                             ");
swapValueDude(1000,  2000);
console.log("                             ");

console.log("4.addThreeValues");
function addThreeValues(first,second,third){
    var total = first+second+third;
    console.log("Addition = ",total);
}
addThreeValues(10.23,600,40);
addThreeValues("Hello"," Good"," Morning");