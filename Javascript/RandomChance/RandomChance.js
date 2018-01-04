function slots(numOfQuarters, pass){
    while(numOfQuarters > 0){
        numOfQuarters --;
        var win = Math.floor(Math.random()*100); //creates random number to see if you won or lost
        var amountWon = Math.floor(Math.random()*50 + 50);
        if(numOfQuarters >= pass){ //if you have won enough to quit, it will break the loop and return your winnings
            console.log("you have won enough to quit", numOfQuarters);
            return numOfQuarters;
            break;
        }
        else if(win == 1){
            console.log("you now have", numOfQuarters + amountWon);
            numOfQuarters = numOfQuarters + amountWon; 
            return numOfQuarters;
        }
        else if(numOfQuarters == 0){ //if you're all of out quarters, it will exit out of loop
            console.log("you don't have any more quarters to play", numOfQuarters);
            return 0; 
        }
    }
}
slots(20, 500)


