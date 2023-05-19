

function monthYear(month){
    switch (month) {
        case 1:
            console.log(`First month is January : Num is ${month} `); 
            break;
            case 2:
            console.log(`Second month is Febuary : Num is ${month} `); 
            break;
            case 3:
            console.log(`Third month is March : Num is ${month} `); 
            break;
            case 4:
            console.log(`Fourth month is April : Num is ${month} `); 
            break;
            case 5:
            console.log(`Fifth month is May : Num is ${month} `); 
            break;
            case 6:
            console.log(`Sixth month is June : Num is ${month} `); 
            break;
            case 7:
            console.log(`Seventh month is July : Num is ${month} `); 
            break;
            case 8:
            console.log(`Eighth month is August: Num is ${month} `); 
            break;
            case 9:
            console.log(`Ninth month is September: Num is ${month} `); 
            break;
            case 10:
            console.log(`Tenth month is October : Num is ${month} `); 
            break;
            case 11:
            console.log(`Eleventh month is November:  Num is${month} `); 
            break;
            case 12:
            console.log(`Twelveth month is December : Num is ${month} `); 
            break;
    
        default:
            console.log(`Invalid Month -- ${month}, Select valid Month`);
            break;
    }
}
monthYear(null);
monthYear(undefined);
monthYear(12);
monthYear(-6);
monthYear(5);
monthYear(15);
monthYear(2);