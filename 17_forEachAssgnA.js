





const arrayNumbers = [1, -7, 40, 502, -77, 91, 0, 108, 89, -601];
console.log(`1. Array element with its index ..`);
arrayNumbers.forEach( (element,index) => {
       console.log(`Index : ${index} , Element : ${element}`);
});

console.log(`--------------------------------------------------------------------`);
console.log(`2. Positive numbers..`);
arrayNumbers.forEach( (element) => {
     if (element>0) {
        console.log(` ${element}`);
     }
});

console.log(`--------------------------------------------------------------------`);
console.log(`3. Negative numbers..`);
let negativeNums =[];
arrayNumbers.forEach( (element) => {
    if (element<0) {
        negativeNums.push(element);
    }
});
negativeNums.forEach(element => console.log(element));


console.log(`--------------------------------------------------------------------`);
console.log(`4. Even numbers..`);
const evenNum = [];
arrayNumbers.forEach((element) => {
    if (element%2 == 0) {
        evenNum.push(element);
    }
});
evenNum.forEach(element => console.log(element));


console.log(`--------------------------------------------------------------------`);
console.log(`5. Sum of all elements..`);
let sumOfElement = 0;
arrayNumbers.forEach( (element) => {
    sumOfElement =  sumOfElement + element;
} );
console.log(sumOfElement);

console.log(`--------------------------------------------------------------------`);
console.log(`6. Even Indexed Elements..`);
arrayNumbers.forEach((element,index) => {
    if (index%2==0) {
        console.log(element);
    }
});

