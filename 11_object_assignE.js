




const sbiBank = {
    bankName: "SBI Bank",
    location: "New Sangavi",
    accountNo: 236729649,
    ifsc: "SBIN0000371",
    intrestrate: "6.50%",
    showdetails:function(){
        console.log(`Bank Name: ${this.bankName}, Location: ${this.location}, Acc No: ${this.accountNo}, IFSC Code: ${this.ifsc},Interest Rate: ${this.intrestrate} `);
    },
};
console.log(`1.SBI Bank Details:`);
sbiBank.showdetails();
console.log(`--------------------------------------------------------------------------------------------------------`);

const axisBank = {
    bankName: "Axis Bank",
    location: "Pimple Gurav",
    accountNo: 986234567,
    ifsc: "UTIB0003124",
    intrestrate: "7%",
    showdetails:function(){
        console.log(`Bank Name: ${this.bankName}, Location: ${this.location}, Acc No: ${this.accountNo}, IFSC Code: ${this.ifsc},Interest Rate: ${this.intrestrate} `);
    },
};
console.log(`2.AXIS Bank Details:`);
axisBank.showdetails();
console.log(`------------------------------------------------------------------------------------------------------`);

const hdfcBank = {
    bankName: "HDFC Bank",
    location: "Nigadi",
    accountNo: 987499347,
    ifsc: "HDFC0000490",
    intrestrate: "8.50%",
    showdetails:function(){
        console.log(`Bank Name: ${this.bankName}, Location: ${this.location}, Acc No: ${this.accountNo}, IFSC Code: ${this.ifsc},Interest Rate: ${this.intrestrate} `);
    },
};
console.log(`3. HDFC Bank Details:`);
hdfcBank.showdetails();
console.log(`-------------------------------------------------------------------------------------------------------`);

const yesBank = {
    bankName: "Yes Bank",
    location: "Aundh",
    accountNo:123456567,
    ifsc: "YESB0BMSB16",
    intrestrate: "9%",
    showdetails:function(){
        console.log(`Bank Name: ${this.bankName}, Location: ${this.location}, Acc No: ${this.accountNo}, IFSC Code: ${this.ifsc},Interest Rate: ${this.intrestrate} `);
    },
};
console.log(`4. YES Bank Details:`);
yesBank.showdetails();
