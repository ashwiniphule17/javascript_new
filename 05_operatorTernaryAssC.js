


console.log(`1. Check Male Eligibility For Marriage`);
function maleMarriageEligibility(gender,age,boyName){
    var age = 25;
    var gender = "Male";
    var candidateName = "Bill Gates";
    var result = gender == "Male" && age>=21 ? "Eligible For Marriage" : "Not Eligible For Marriage";
    console.log(`  1.1 ${candidateName} --  ${result}`);

    
    var age = 17;
    var gender = "Male";
    var candidateName = "Stew Job";
    var result = gender == "Male" && age>=21 ? "Eligible For Marriage" : " Not Eligible For Marriage";
    console.log(`  1.2 ${candidateName} --  ${result}`);
}
maleMarriageEligibility();
console.log(`----------------------------------------------------------------------`);

console.log(`1. Check Female Eligibility For Marriage`);
function femaleMarriageEligibility(gender,age,girlName){
    var gender = "Female"; 
    var age = 16;
    var candidateName = "Jenifer";
    var result = gender == "Female" && age>=18 ? "Eligible For Marriage" : "Not Eligible For Marriage";
    console.log(`  1.1 ${candidateName} --  ${result}`);

    var gender = "Female";
    var age = 27;
    var candidateName = "Malinda";
    var result = gender == "Female" && age>=18 ? "Eligible For Marriage" : " Not Eligible For Marriage";
    console.log(`  1.2 ${candidateName} --  ${result}`);
}
femaleMarriageEligibility();


    
