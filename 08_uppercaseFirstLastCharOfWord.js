




const string = "How are you mate";
let newChar = "";
const arrayWords = string.split(" ");
for (const element of arrayWords){
    for (let index = 0; index < element.length; index++) {
        let char = "";
        if (index==0 || index== element.length-1) {
             char = element[index].toUpperCase();   
        }else{
            char = element[index];
        }
        newChar = newChar + char;
    }
    newChar = newChar + " ";
}
console.log(` ---------- Each words First & Last Char to Uppercase ------ `);
console.log(`Given string : How are you mate `);
console.log(`Updated String : ${newChar}`);




