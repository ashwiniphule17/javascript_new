


function voteEligibilty(age) {
    if(age == 0  ||age <0 || age >120){
        console.log(`You Have Entered Invalid Data ${age}`);
    }
    else{
        if(age==undefined ){
        console.log(`Invalid Data -- ${age} `);
    }
        else{if(age<18){
        console.log(`Your age is ${age}, Not Eligible for voting`);
    }
        else{
        console.log(`Your Age Is ${age}, you are eligible for voting`);
    }if( age== null){
        console.log(`Invalid data --${age}`);

        }
      } 
    }
}    
voteEligibilty(45);
voteEligibilty(17);
voteEligibilty(8);
voteEligibilty(20);
voteEligibilty(-10);
voteEligibilty(200);
voteEligibilty(0);
voteEligibilty(undefined);
voteEligibilty(null);


