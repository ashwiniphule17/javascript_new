



const array = [10, 5, 'a', 'b', 'h', 11];
const arrayNum = array.filter( (element)=> {
    return element<12;
} );
console.log(`Given Array : [10, 5, 'a', 'b', 'h', 11]; `);
 arrayNum.sort();
 //console.log(arrayNum);
 const arryNumbers = arrayNum.sort( (n1, n2) => {
    return n1 > n2 ? 1 : -1 ;
 } );
 console.log(`A. Numbers From Array`);
 console.log(arryNumbers);

const arrChar  = array.splice(2,3);
console.log(`B. Alphabets From Array`); 
console.log(arrChar);


