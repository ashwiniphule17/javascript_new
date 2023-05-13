

    function handsOn() {
        var handsOn = "  Hey you are doing good,keep it up    ";
    console.log(`Given String As It Is:${handsOn}`);
    }
    var handsOn = "  Hey you are doing good,keep it up    ";
    console.log(`1. Given String As It Is:${handsOn}`);

    var handsOn = "  Hey you are doing good,keep it up    ";
    var handsOnLength = handsOn.length;
    console.log(`2. Total num of String Length Is: ${handsOnLength}`);

    var handsOn = "  Hey you are doing good,keep it up    ";
    var trimmedHandsOn = handsOn.trim();
    var lengthAfterTrim = trimmedHandsOn.length;
    console.log(`3. After Leading & Trailing Extra Spaces string Is: ${trimmedHandsOn},  ${trimmedHandsOn.length}`);
    console.log(`4. Trimmed Total Spaces = ${handsOnLength-lengthAfterTrim}`);

    var handsOn = "Hey you are doing good,keep it up";
    var charAtZeroIndex = handsOn.charAt();
    var charAtLastIndex = handsOn.charAt(handsOn.length-1);
    console.log(`5. First & Last Char - ${charAtZeroIndex} , ${charAtLastIndex}`);

    var handsOn = "Hey you are doing good,keep it up";
    var resultSplit = handsOn.split(" ");
    console.log(`6. Total No Of words ${resultSplit.length}`);

    var searchResult = handsOn.search("good");
    console.log(`7. Index Of Good - ${searchResult}`);

    var subStringResult = handsOn.substring(22);
    //var sliceResult = handsOn.slice(22);
    console.log(`8. Substring From 22 - ${subStringResult}`);
    //console.log(` Substring From 22 ${sliceResult}`);

    var endResult = handsOn.endsWith("up");
    console.log(`9. Is String Ends With "Up" - ${endResult}`);

    var startResult = handsOn.startsWith("Hey");
    console.log(`10.Is String Starts With "Hey" -  ${startResult}`);