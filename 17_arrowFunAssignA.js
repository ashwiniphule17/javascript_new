



console.log(`1. Arrow Function with No Arguments & No Return value :......`);
let greet = () => {
    console.log(`   'Good Morning, Today is Monday.'`);
}
greet();

console.log(`------------------------------------------------------------------------------------------`);

console.log(`2. Arrow function with 3 Arguments & No Return value ........`);
let multiplication = (numOne ,numTwo,numThree=1) => {
    let result = numOne * numTwo * numThree;
    console.log( `   Multiplication Result = ${result}`);
}
multiplication(5,5,2);
multiplication(10,4);

console.log(`------------------------------------------------------------------------------------------`);

console.log(`3. Arrow function with 5 Arguments & Return value`);
let addition = (valueOne,valueTwo,valueThree,valueFour,valueFive) => {
    let addResult = valueOne + valueTwo + valueThree + valueFour + valueFive;
    return addResult;
}
 addResult = addition(100,100,200,349,756);
 console.log(`   Addition Of Given Num : ${addResult}`);

 addResult = addition("I am ", "learning ", "ES6 ", "features ", "in depth. ");
 console.log(`   Addition Of Given String: ${addResult}`);


