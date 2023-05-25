function factorialOfNum(value) {
  let factorial = 1;
  if (value == 0) {
    console.log(`Factoeial of 0 is : 1`);
    return;
  }else {
    if (value == null || value == undefined || isNaN(value)) {
      console.log(`Invalid data : ${value}`);
    }
    else{
      if (value >=1 || value <=9) {
        for (let index = value; index >=1 ; index--) {
          factorial = factorial * index;
         }
        console.log( `Factorial of ${value} is : ${factorial}`);
      }
    }
  }
  }
factorialOfNum(5);
factorialOfNum(8);
factorialOfNum(null);
factorialOfNum(3);
factorialOfNum(undefined);
factorialOfNum(9);
factorialOfNum(0);
factorialOfNum(NaN);

