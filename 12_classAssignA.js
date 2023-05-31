




class Vehical {
    constructor(name,model,color,year,country,price){
       this.name = name;   
       this.model = model;
       this.color = color;
       this.year = year;
       this.country = country;
       this.price = price;
    }
    showDetails(){
        console.log(`Details of Vehical is : ${this.name}, ${this.model}, ${this.color}, ${this.year}, ${this.country}, ${this.price}`);
    }
}
const hundai = new Vehical("Hundai", "i10", "Aqua Teal", 2008 , "South Korea","7 lacs");
const mahindra = new Vehical("Mahindra", "XUV500", "Black" ,2011, "India","12 lacs");
const toyota = new Vehical("Toyota","Fortuner","White",2009, "Thailand","32 lacs");
const maruti = new Vehical("Maruti", "Wagon R", "Silver", 2009,"India" , "6 lacs");

console.log(`1. Vehical Details using class Vehical : ....`);
hundai.showDetails();
mahindra.showDetails();
toyota.showDetails();
maruti.showDetails();

class College {
    constructor(name,location,departments,university){
      this.collegeName = name;
      this.location = location;
      this.departments = departments;
      this.university = university;
    }
    showDetails(){
        console.log(`College Details : ${this.name}, ${this.location}, ${this.departments}, ${this.university}`);
    }
};
const jjmcoe = new College("JJM COE","Jaysingpur", "Electronics","Shivaji University");
const vjti = new College("VJTI", "Mumbai", "Computer", "Mumbai University");
const dyp = new College("Dr.DYP COE", "Aakurdi", "Mechanical", "Savitribai Phule University");
const walchand = new College("Walchnad College", "Solapur","Civil", "Solapur University");



console.log(`----------------------------------------------------------------------------------`);

console.log(`2. Traversing an Object using For in loop : ....`);

  function traverseObject(name){
    for (const key in name) {
        if (Object.hasOwnProperty.call(name, key)) {
            const value = name[key];
            console.log(`${key} : ${value}`);
        }
    }
}

traverseObject(jjmcoe);
console.log(`----------------------------------------------------------------------------------`);
traverseObject(vjti);
console.log(`----------------------------------------------------------------------------------`);
traverseObject(dyp);
console.log(`----------------------------------------------------------------------------------`);
traverseObject(walchand);