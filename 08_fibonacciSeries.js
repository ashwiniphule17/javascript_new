



    let num = 9;
    var numOne = 0;
    var numTwo = 1;
    console.log(` ........  Fibonacci series :..........`);
    for (let index = 0; index <=9; index++) {
        const sumOfPrevTwo = numOne + numTwo;
        numOne = numTwo;
        numTwo = sumOfPrevTwo;
        console.log(`${numTwo}`);
        
    }
