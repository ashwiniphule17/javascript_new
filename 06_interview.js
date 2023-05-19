



var interviewEligibilty = function(gradScore,hscScore,sscScore,candidateName){
    if ((gradScore >=70) ||(hscScore >=80)  || (sscScore >90)){
        console.log(`Congrats ${candidateName} ,you are eligible for TCS interview`);
    } else {console.log(`Unfortunately ${candidateName} , you are not eligible for interview`);
        
    }
}
interviewEligibilty(80,86,90,"Ashwini");
interviewEligibilty(70,65,55,"Payal");
interviewEligibilty(60,79,88,"Gauri");