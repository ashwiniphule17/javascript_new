





 function reverseStr(str) {
    var reverseString = "";
    var strLength = str.length-1;
    for (let index = strLength; index >= 0; index--) {
        var char = str.charAt(index);
        reverseString = reverseString.concat(char);
    }
    if (reverseString==str) {
        console.log(`Given string : ${str} is --Pallindrome`);
    }

    else if (reverseString!==str) {
        console.log(`Given string : ${str} is -- Not Pallindrome`);
    }
 };
 reverseStr("madam");
 reverseStr("141");
 reverseStr("Sunday");
 reverseStr("mom");
 reverseStr("listen");
 reverseStr("dad");