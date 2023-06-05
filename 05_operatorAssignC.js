


console.log(`--------------TCS Interview Eligibility-------------------`);
var interviewEligibilty = function(gradScore,hscScore,sscScore,candidateName){  
    var resultOne = ('Graduation score>=70')|| ('HSc score>=80') || ('SSc Score >90') ? "Congrats Ashwini you are eligible for TCS Interview":
    "unfotunately you are not eligible for interview";
    console.log(`${resultOne}`);}
interviewEligibilty(80,86,90,"Ashwini");

    var interviewEligibilty = function(gradScore,hscScore,sscScore,candidateName){
    var resultTwo =  ('Graduation score>=70')|| ('HSc score>=80') || ('SSc Score >90') ? "Congrats Suryaja you are eligible for TCS Interview":
    "unfotunately you are not eligible for interview";
    console.log(`${resultTwo}`);}
 interviewEligibilty(70,65,55,"Suryaja");

    var interviewEligibilty = function(gradScore,hscScore,sscScore,candidateName){
    var resultThree = (('Graduation score>=70') || ('HSc score>=80') || ('SSc Score >90')) ? "Congrats Snehal you are eligible for interview" :
    "Unfotunately you are not eligible for interview";
    console.log(`${resultThree}`);}
interviewEligibilty(60,79,88,"Snehal");
