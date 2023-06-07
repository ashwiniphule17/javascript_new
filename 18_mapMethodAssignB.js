




class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company){
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}
const anilObject = new Employee(22, "Anil", "IT", 50000, "TCS");
const radhaObject = new Employee(33, "Radha", "HR", 74000, "Wipro");
const rishiObject = new Employee(55, "Rishi", "Fianance", 47000, "TCS");
const sonaliObject = new Employee(66, "Sonali", "Fianance", 45000, "Infy");
const monikaObject = new Employee(77, "Monika", "IT", 40000, "Wipro");
const vinayakObject = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const maheshObject = new Employee(99, "Mahesh", "HR", 85000, "Infy");

const array_employees =[anilObject,radhaObject,rishiObject,sonaliObject,monikaObject,vinayakObject,maheshObject];

console.log(`1. List of all employee names..`);
const arrayName =  array_employees.map( (employee) => {
    return employee.emp_name;
});
console.log(arrayName);

console.log(`--------------------------------------------------------------------------------------------------`);
console.log(`2. list of all departments...`);
const arrayDept = array_employees.map( (employee) => {
    return employee.emp_dept;
});
console.log(arrayDept);

console.log(`----------------------------------------------------------------------------------------------------`);
console.log(`3. List of all employee ID's... `);
const empIds =  array_employees.map( (employee) => {
    return employee.emp_id;
});
console.log(empIds);













