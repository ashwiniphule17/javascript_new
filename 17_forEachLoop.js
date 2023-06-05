




const arrayNums = [10, 5, 70, 90, 100, 30 ];

arrayNums.forEach( ( currentValue, index, array ) => {
    console.log(`${currentValue}, ${index}`);
    console.log(array);
}  );

console.log(" ======== Executing forEach() with only required arguments==========");
arrayNums.forEach( (currentValue) => {
    console.log(currentValue);
} );

console.log(` --------- num >= 50----------`);
arrayNums.forEach( (currentValue) => {
    if (currentValue>=50) {
        console.log(currentValue); 
    }
} );