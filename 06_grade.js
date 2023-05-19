function gradeCalculation(marks) {
  if (marks == undefined || isNaN(marks) || marks <= 0 || marks > 100) {
    // undefined, null
    console.log(`Invalid marks: ${marks},   provide valid marks`);
  } else {
    if (marks>=90) {
        console.log(`Funtastic Marks ${marks},   Your Grade is : A+`);
    } else {
        if (marks>=75 && marks<90) { 
            console.log(`Excellent Marks ${marks},  Your Grade is : A`);
        } else {
            if (marks>50 && marks<75) {
                console.log(`Good Marks ${marks},   Your grade is : B`);
            } else {
                    console.log(`Marks Is ${marks},   Your grade is : C, Need improvement`);
                } 
                
            }
            
        }
        
    }
  }
// Handling invalid inputs
gradeCalculation(undefined);
gradeCalculation(null);
gradeCalculation(NaN);
gradeCalculation("Eighty");
gradeCalculation(-7);
gradeCalculation(150);
gradeCalculation("91");
gradeCalculation(0);

gradeCalculation(98);
gradeCalculation(80);
gradeCalculation(90);
gradeCalculation(35);
gradeCalculation(29);
gradeCalculation(64);
gradeCalculation(49);
