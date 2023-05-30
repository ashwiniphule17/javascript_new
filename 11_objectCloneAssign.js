




const sbiBank = {
    bankName: "SBI Bank",
    accountNo: 236729649,
    ifsc: "SBIN0000371",
    intrestrate: "6.50%"
};
const bankLocation = {
    street: "M.G.Road",
    city: "Nagpur",
    PIN: 765432
};

const rateOfinterest ={
    homeLoanInterest: "8%",
    personalLoanInterest: "9.5%",
    dueInterest: "10%"
};

console.log(`1. Creating sbiBank Object :.......`);
console.table(sbiBank);
console.log(`--------------------------------------------------------------------------------------------------------`);

console.log(`2. Creating bankLocation Object :.......`);
console.table(bankLocation);
console.log(`--------------------------------------------------------------------------------------------------------`);

console.log(`3. Clone using Object.assign :---`);
Object.assign(sbiBank,bankLocation);
console.table(sbiBank);
console.table(bankLocation);
console.log(`--------------------------------------------------------------------------------------------------------`);

console.log(`4. Creating Object rateOfInterest :.....`);
console.table(rateOfinterest);

console.log(`5. Merge Object sbiBank, bankLocation, rateOfinterest`);
const sbiDetails = Object.assign( sbiBank, bankLocation, rateOfinterest);
console.table(sbiDetails);
console.log(`--------------------------------------------------------------------------------------------------------`);

console.log(`6. Traversing Merge Object using for in loop :.....`);
for (const key in sbiDetails) {
    if (Object.hasOwnProperty.call(sbiDetails, key)) {
        const value = sbiDetails[key];
        console.log(`${key} :  ${value}`);
    }
}