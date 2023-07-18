



function primeNumber(number){
    let isPrimeNum=true;
    for (let index = 2; index < number; index++) {
        if (number % index==0) {
            isPrimeNum=false;
           // console.log(`given num is divid by ${index}`);
            break;
        }
    }
        if (isPrimeNum) {
            console.log(`prime num ${number}`);
        } else {
            console.log(`not prime num ${number}`);
        }
}
primeNumber(71);
primeNumber(2);
primeNumber(8);
