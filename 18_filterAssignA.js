




const arrayNumbers = [20, 11,40, 25, 37, 49, 9, 90, 60, 2, 19 ];
console.log(` Given Array = [20, 11,40, 25, 37, 49, 9, 90, 60, 2, 19 ]`);
console.log(`1. All numbers greater than 50...`);
const numGreater50 = arrayNumbers.filter( (element) => {
    return element>50;
});
console.log(numGreater50);

console.log(`--------------------------------------------------------------------------------------------`);
console.log(`2. All Even numbers.......`);
const evenNum = arrayNumbers.filter( (element) =>{
    return element%2==0;
});
console.log(evenNum);

console.log(`---------------------------------------------------------------------------------------------`);
console.log(`3. All Odd numbers.......`);
const oddNum = arrayNumbers.filter( (element) =>{
    return element%2!==0;
});
console.log(oddNum);

console.log(`------------------------------------------------------------------------------------------------`);
console.log(`4. Numbers multiple of 5 .......`);
const multipleOfFive = arrayNumbers.filter( (element) =>{
    return element%5==0;
});
console.log(multipleOfFive);

console.log(`-----------------------------------------------------------------------------------------------------`);
console.log(`5. Numbers between 20 & 50 .......`);
const numBetTwentyAndFifty = arrayNumbers.filter( (element) =>{
    return (element >20 && element<50) ;
});
console.log(numBetTwentyAndFifty);



