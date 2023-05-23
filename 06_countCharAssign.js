




function countChar(str){
           let count = 0;
           for (let index = 0; index < str.length; index++) {
            var char = str.charAt(index);
            if (char == 'A' || char == 'a') {
                //console.log(`${char} `)
                count++;
            }
        }
        console.log(`Total Num Of count char 'A or a' in given string is : ${count}`);
    }   
countChar("I AM Learning JavaScript, The Language Of internet");
countChar("My Favourite movie is LAggan");