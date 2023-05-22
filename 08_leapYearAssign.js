var checkLeapYear = function (leapYear) {
  if (leapYear == null || leapYear == undefined || isNaN(leapYear)) {
    console.log(`Invalid Input : ${leapYear} `);
  } else {
    if (leapYear % 100 !== 0) {
      console.log(`It is not leap year : ${leapYear}`);
    } else {
      if (leapYear % 400 == 0 || leapYear % 4 == 0) {
        console.log(`Valid Input : ${leapYear} is Leap year `);
      }
    }
  }
};
checkLeapYear(null);
checkLeapYear(2000);
checkLeapYear(1999);
checkLeapYear(1600);
checkLeapYear(2022);
checkLeapYear(1945);
checkLeapYear("Twenty Twenty");
checkLeapYear(undefined);
checkLeapYear(NaN);
checkLeapYear(1750);
