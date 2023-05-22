


console.log(`1. Given string is : "I am very good IT developer"`);
var count = 0;
var stringName = "I am very good IT developer";
for (let index = 0; index < stringName.length; index++) {
    var char = stringName.charAt(index);
    if(char == "a" || char == "e"|| char == "i" || char == "o" || char == "u" ||
    char == "A" || char == "E"|| char == "I" || char == "O" || char == "U")
    {
      count++}
}
console.log(`   Total num of vowels count in given string == ${count}`);

console.log(`---------------------------------------------------------------------------------`);
var cubeNum = function(value){
    var sum = 0;
    //console.log(` Cube of given num is -- ${value}`); 
for (let index = 1; index <=5; index++) {
        sum = sum + index * index * index; 
         
}
console.log(`2. Sum of cube num (1,2,3,4,5) is-- ${sum}`);
}
cubeNum(5);

console.log(`----------------------------------------------------------------------------------`);
console.log(`3.`)
function oddPositionChar(givenString){
    var str = "";
    for (let index = 0; index <= givenString.length; index++) {
    var char = givenString.charAt(index);
    if (index%2!==0 && char!= " ") {
        str = str + char;   
    }
   }
   console.log(` Odd Position char in string "${ givenString }" --${str}`);
}

oddPositionChar("Hard work always pays back");
oddPositionChar("Soon I wiil be Angular IT champ ");