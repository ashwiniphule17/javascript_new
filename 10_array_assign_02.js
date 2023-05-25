console.log(`Given Array : [20,31,40,25,23,11,29,9,60,2,11]`);
const arrayNumbers = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
let arrayLength = arrayNumbers.length;
console.log(`1. Total elements available in given array : ${arrayLength}`);
console.log(`----------------------------------------------------------------------------------`);

console.log(`2. Given Array : [20,31,40,25,23,11,29,9,60,2,11]`);
let zerothIndexValue = arrayNumbers[0];
let lastElement = arrayNumbers[arrayLength - 1];
console.log(
  `--> First element is : ${zerothIndexValue}  & Last element is : ${lastElement}`);
  console.log(`----------------------------------------------------------------------------------`);

console.log(`3. Given Array : [20,31,40,25,23,11,29,9,60,2,11]`);
let thirdLastEle = arrayNumbers[arrayLength - 3];
console.log(`--> Third last element from given array is : ${thirdLastEle}`);
console.log(`----------------------------------------------------------------------------------`);

console.log(`4.find all Even num using for of loop`);
const even = [];
for (const element of arrayNumbers) {
  if (element % 2 == 0) {
    even.push(element);
  }
}
console.log(`${even}`);
console.log(`----------------------------------------------------------------------------------`);

console.log(`5.find all Odd num using for of loop`);
const odd = [];
for (const element of arrayNumbers) {
  if (element % 2 !== 0) {
    odd.push(element);
  }
}
console.log(`${odd}`);
console.log(`----------------------------------------------------------------------------------`);

console.log(`6. All even positioned num using For In Loop & sum of it--`);
console.log(`Given Array : [20,31,40,25,23,11,29,9,60,2,11]`);
let sumEven = 0;
for (const index in arrayNumbers) {
  if (index % 2 == 0) {
    sumEven += arrayNumbers[index];
    console.log(`Even positined Num From Given array : ${arrayNumbers[index]}`);
  }
}
console.log(`--> Sum of even positioned num : ${sumEven}`);
console.log(`----------------------------------------------------------------------------------`);

console.log(`7. All odd positioned num using For In Loop & sum of it --`);
console.log(`Given Array : [20,31,40,25,23,11,29,9,60,2,11]`);
let oddPos = 0;
for (const index in arrayNumbers) {
  if (index % 2 !== 0) {
    oddPos += arrayNumbers[index];
    console.log(`Odd positioned Num From Given array : ${arrayNumbers[index]}`);
  }
}
console.log(`--> Sum of odd positioned num:  ${oddPos}`);
console.log(`----------------------------------------------------------------------------------`);

console.log(`8. Sum of all the elements in Array--`);
let sum = 0;
for (let index = 0; index < arrayNumbers.length; index++) {
  sum += arrayNumbers[index];
}
console.log(` Sum of all num -- ${sum}`);
console.log(`----------------------------------------------------------------------------------`);

console.log(`9. Find the num multiple of 5 ---`);
for (const num of arrayNumbers) {
  const multipleFive = [];
  if (num % 5 == 0) {
    multipleFive.push(num);
    console.log(`Multiple of 5 num is : ${multipleFive}`);
  }
}
console.log(`----------------------------------------------------------------------------------`);

let includeResult = arrayNumbers.includes(115);
console.log(`10. Is num 115 available in array-- ${includeResult}`);
console.log(`----------------------------------------------------------------------------------`);

var result = arrayNumbers.includes(23);
console.log(`11. Is num 23 available in array-- ${result}`);
console.log(`----------------------------------------------------------------------------------`);

console.log(`12. Add num 55 & 66 before index 3--`);
console.log(`--> Given Array : [20,31,40,25,23,11,29,9,60,2,11]`);
arrayNumbers.splice(3, 0, 55, 66);
console.log(arrayNumbers);
console.log(`----------------------------------------------------------------------------------`);

console.log(`13. Delete 3 elements from index 4--`);
arrayNumbers.splice(4, 3);
console.log(arrayNumbers);
