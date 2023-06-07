




console.log(`Given Array : [20 , 11 , 40 , 25 , 23 , 11 , 9 , 31 , 60 , 2 , 19 ] `);
const arrayNums = [20 , 11 , 40 , 25 , 23 , 11 , 9 , 31 , 60 , 2 , 19 ];
console.log(`1. Add 10 into each element..`);
const arrayTrans = arrayNums.map( (element) => {
    return element + 10;
} );
console.log(arrayTrans);

console.log(`------------------------------------------------------------------------`);

console.log(`2. Square of each element of array..`);
const array = arrayNums.map( (element) => {
    return element*element;
} );
console.log(array);

console.log(`------------------------------------------------------------------------`);
console.log(`3. Add index value into each array element..`);
const arr = arrayNums.map( (element, index) => {
    return element + index;
});
console.log(arr);
