



let professor = {
    name: "Elon Musk",
    dept: "Electronics",
    collegeName: "JJM COE",
    gender: "female",
    age: 35,
    degrees: {
        engineering: "CSC",
        PHD: "Advance Computing",
        diploma: "Electronics",
        MBA: "Marketing Management",
        BCS: "Computer Programing",
    },
    certificates: ["Hacker Rank Participation", "certificate in IFE Course","Certificate in adavnce Programming"],
    teacherdegrees: function(){
        console.log(`Enginnering: ${professor.degrees.engineering} , PHD: ${professor.degrees.PHD}, Diploma: ${professor.degrees.diploma}, MBA: ${professor.degrees.MBA}, BCS: ${professor.degrees.BCS} `); 
    },
};
console.log(`1. Profeessor Properties:`);
console.log(professor);

console.log(`2.Certificates: `);
console.log(professor.certificates);

console.log(`3. Professor Total Degrees are:`);
professor.teacherdegrees();

console.log(`4. Adding New Proprty:`);
professor.totalExperience = "14 years";
console.log(`Total Experience : ${professor.totalExperience}`);

console.log(`5. Before Modification :`);
console.log(professor);
console.log(`   After Modification : `);
professor.name = "Aswini Jadhav";
console.log(professor);

console.log(`6. Add New Certificate : "Oracle Certified"`);
console.log(` Before Adding certificate array is :`);
console.log(professor.certificates);
professor.certificates.push("Oracle Certified");
console.log(` After Adding certificate array is :`);
console.log(professor.certificates);

console.log(`7. Log Last Element of Array :`);
let arrayLength = professor.certificates.length;
const lastElement = professor.certificates[arrayLength-1];
console.log(` Last Element From Array : "${lastElement}"`);


