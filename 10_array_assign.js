



console.log(`Given fruit Array is ["Banana" , "Orange", "Apple" ,"Mango" ,"Water Melon"]`);
console.log(`                                                                                                                   `);
const arrayFruits = ["Banana" , "Orange", "Apple","Mango","Water Melon"];
const zerothIndexValue = arrayFruits[0];

let arrayLength = arrayFruits.length;
const lastElement = arrayFruits[arrayLength-1];
console.log(`1. First Element : ${zerothIndexValue} & Last Element : ${lastElement}`);

console.log(`2. Add element Papaya before Banana--`);
arrayFruits.unshift("Papaya");
console.log(`   ${arrayFruits}`);

console.log(`3. Remove Mango from Array--`);
const arraySpliced = arrayFruits.splice(4,1);
console.log(`  ${arrayFruits}`);

console.log(`4. Add  Element "Pine Apple' At Last--`);
arrayFruits.push("Pine Apple");
console.log(`  ${arrayFruits}`);

console.log(`5. Insert Element "Dragon Fruit" Before "Water Melon"`);
arrayFruits.splice(4,0,"Dragon Fruit");
console.log(`  ${arrayFruits}`);

console.log(`6. Replace Element "Orange" by "Kiwi"`);
arrayFruits.splice(2,1,"Kiwi");
console.log(`  ${arrayFruits}`);

console.log(`7. Log element from Index 1 to 4---`);
const spliced = arrayFruits.splice(1,4);
console.log(`  ${spliced}`);

console.log(`8. Only Last 3 Elements--`);
var arrLength =arrayFruits.length;
const lastThreeEle = arrayFruits.slice(arrLength-3)
console.log(`  ${lastThreeEle}`);

