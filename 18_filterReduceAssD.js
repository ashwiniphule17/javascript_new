





class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company){
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}
const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha =  new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

const array_employees = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];

console.log(`1. All emplyees names from Wipro Company..`);
const arrayEmpWipro = array_employees.filter( (employee) => {
    return employee.emp_company == "Wipro";
});
const arrayEmpWiproNames =  arrayEmpWipro.map( (employee) => {
    return employee.emp_name;
});
console.log(arrayEmpWiproNames);
console.log(`-------------------------------------------------------------------------------------------------------`);

console.log(`2. All employee names from "IT" OR "HR" dept..`);
const arrayItOrHrDept = array_employees.filter( (employee) => {
    return (employee.emp_dept == "IT" || employee.emp_dept == "HR");
});
const arrayItOrHrDeptNames = arrayItOrHrDept.map( (employee) => {
    return employee.emp_name;
});
console.log(arrayItOrHrDeptNames);
console.log(`-------------------------------------------------------------------------------------------------------`);

console.log(`3. Employee ID greater than 50... `);
const idGreaterThanFifty = array_employees.filter( (employee) => {
    return employee.emp_id >50;
});
//console.log(idGreaterThanFifty);
const arrayId = idGreaterThanFifty.map((employee) => {
    return employee.emp_id;
});
console.log(arrayId);
console.log(`-------------------------------------------------------------------------------------------------------`);

console.log(`4. Employee names starts with "A", "V", "M"...`);
const arrayNames = array_employees.filter( (employee) => {
    if ((employee.emp_name.startsWith("A"))  || (employee.emp_name.startsWith("V") || (employee.emp_name.startsWith("M")) ))  {
        return employee.emp_name;
    }
});
 const arrNames =  arrayNames.map( (employee) => {
    return employee.emp_name;
 });
 console.log(arrNames);

 console.log(`-------------------------------------------------------------------------------------------------------`);

console.log(`5. Average salary of employess... `);
const empSalaries = array_employees.map( (employee) => {
    return employee.emp_salary;
});
const sumSalary =empSalaries.reduce( (runningTotal, value) => {
    return runningTotal+value;
});
console.log(sumSalary/array_employees.length);

console.log(`-------------------------------------------------------------------------------------------------------`);

console.log(`5. Average salary of IT Departments... `);
const arrayItDept = array_employees.filter( (employee) => {
    return employee.emp_dept == "IT";
});
const arraySumSalaryItDept = arrayItDept.map((employee) => {
     return employee.emp_salary;
});
const avgSalary = arraySumSalaryItDept.reduce((runningTotal,value) =>{
    return runningTotal + value; 
});
console.log(avgSalary / arrayItDept.length);









