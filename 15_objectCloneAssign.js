



console.log(` ..........1. Array Clone Using Shallow Clone..........`);

//console.log(`Given Array : [20,3,4,56,90,400,49]`);
const arrayNum = [20,3,4,56,90,400,49];
const cloneArrayNum = arrayNum;
console.log(` Original Array : ${arrayNum}`);
console.log(` Cloned array : ${cloneArrayNum}`);
cloneArrayNum.push(55,66);
console.log(` Updated with values 55,66 : ${cloneArrayNum}`);

console.log(`-----------------------------------------------------------------------------`);
console.log(` ..........2. Array Clone Using Deep Clone..........`);
console.log(`Original Array : ${arrayNum}`);
arrayNum.push(10,25);
console.log(`Updated Array : ${[...arrayNum]}`);

console.log(`-----------------------------------------------------------------------------`);
console.log(` .........3. Concat arrayNum with arrayEven ........ `);
const arrayEven = [2,30,14,8];
const concatArray = [arrayNum,...arrayEven];
console.log(`${concatArray}`);

console.log(`-----------------------------------------------------------------------------`);
console.log(` ..............4. employee_infoObject .............`);
const employee_info ={
    emp_id: 27,
    emp_name: "John Doe",
    salary: {
        july_month: "40000INR",
        aug_month: "50000INR",
        jun_month: "65000INR"
    },
    address:{
        locality:{
            colony: "Om Vrindavan Society",
            street: "Kanch Pokali, 431202"
        },
        city: "Mumbai",
        state: "Maharashtra",
        country: "India"
    },
    mobiles: ["+91 8600 3456 88" , " 1800 - 4567 32" , " +91 9096 5678 77"]
}

console.log(`-----------------------------------------------------------------------------`);
console.log(`..................5. Log Employee Details........`);

console.log(`a). Addrees : ${employee_info.address.locality.colony}, ${employee_info.address.locality.street}`);
console.log(`    City : ${employee_info.address.city}`);
console.log(`    State : ${employee_info.address.state}`);
console.log(`    Country : ${employee_info.address.country}`);
console.log(`b). Mobiles : ${employee_info.mobiles}`);
console.log(`-----------------------------------------------------------------------------`);

console.log(`.................6. Perform deep clone using JSON.stringify().......`);

console.log(`a). Original Salary: ${employee_info.salary.july_month}`);
employee_info.salary.july_month = "80000INR";
const deepClonedEmployee =JSON.parse(JSON.stringify(employee_info));
console.log(`    Updated Salary: ${deepClonedEmployee.salary.july_month}`);

console.log(`b). Original Country :${employee_info.address.country}`);
employee_info.address.country = "United Kingdom";
console.log(`    Updated Country : ${employee_info.address.country}`);


