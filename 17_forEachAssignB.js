



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

console.log(`1. "TCS" Employee name & Comppany........`);
array_employees.forEach((employee)=>{
    if (employee.emp_company== "TCS") {
        console.log(`   Employee Name : ${employee.emp_name} , Company : ${employee.emp_company}`);
    }
});
console.log(`......................................................................................................................`);

console.log(`2. Salary >= 50000 .`);
array_employees.forEach((employee)=>{
    if (employee.emp_salary>=50000) {
        console.log(`   Emp ID : ${employee.emp_id},  Emp Name : ${employee.emp_name},  Emp Dept : ${employee.emp_dept},  Emp Salay : ${employee.emp_salary},  Emp Compnay : ${employee.emp_company}`); 
    }
});
console.log(`......................................................................................................................`);

console.log(`3. Sum of all the employee salary .`);

let sumSalary = 0;
array_employees.forEach( (employee) => {
    sumSalary = sumSalary + employee.emp_salary;
});
console.log(`   Sum of Salary is : ${sumSalary} `);
console.log(`......................................................................................................................`);

console.log(`4. Avearage Salary.`);
let sumOfSalary = 0;
array_employees.forEach( (employee) =>{
    sumOfSalary =sumOfSalary + employee.emp_salary;
});
const averageSalary = sumOfSalary / array_employees.length;
console.log(`   Average salary is : ${averageSalary} ` );
console.log(`......................................................................................................................`);

console.log(`5. "IT" OR "HR" Dept Salary is >=75000 .`);
array_employees.forEach( (employee) => {
    if ((employee.emp_dept== "IT" || employee.emp_dept == "HR") && employee.emp_salary>=75000) {
        console.log(`   Emp ID : ${employee.emp_id}, Emp Name : ${employee.emp_name}, Emp Dept : ${employee.emp_dept}, Emp Salay : ${employee.emp_salary}, Emp Compnay : ${employee.emp_company}`); 
    }
});









