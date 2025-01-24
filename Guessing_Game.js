//Gussing_Game
const max= prompt ("enter the max number");

const random =Math.floor(Math.random()* max) + 1;

let guess = prompt ("guess the num");
while(true){
    if (guess== "quit"){
        console.log ("user quit");
        break;
    }
    if(guess == random){
        console.log("you are right! congrats!! random number was",random);
        break;
    }else if(guess < random){
        guess = prompt("hint : your guess was..... too small.------> try again");
    }
    else {100100
        guess = prompt("hint : your guess was ....too large.-----> try again");
    }
    
    /*lse{
       guess= prompt ("your guess was wrong. plzz try again");
    }*/
}