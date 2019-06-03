

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var yourGuessesSoFar = []; 
var ueserAnswer;

 

//  lists all letters of the alphabet aka all lowercasr letter options available for user imputs.
var letterOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var computerAnswer = letterOptions[Math.floor(Math.random() * letterOptions.length)]; 

console.log("computer answer: ", computerAnswer);

// This is a function. It runs whenever the user presses a key and needs to update wins, guesses left, and losses.
document.onkeyup = function (event) {

    ueserAnswer = event.key;
    console.log("user answer: ", ueserAnswer)
    
    // guessesLeft = guessesLeft - 1;
    guessesLeft--;
    // display guessesLeft to page with getElementById and .textContent
    var guessesLeftText = document.getElementById("gesses-left-text");
    guessesLeftText.textContent = guessesLeft;


    yourGuessesSoFar.push(ueserAnswer);
    // display yourGuessesSoFar to page with getElementById and .textContent
    var yourGuessesSoFarText = document.getElementById("guesses-so-far-text");
    yourGuessesSoFarText.textContent = yourGuessesSoFar;

    // ueserAnswer resets(guessesLeft to 9 after (guessesLeft === 0)) 
    

    if (ueserAnswer === computerAnswer) {
        wins++;
        var winsText = document.getElementById("wins-text");
        winsText.textContent = wins;
        // winsText.textContent = wins; /prints the text to the dom
        reset(); 

        // wins = wins + 1
    } else if (guessesLeft > 0) {
        var guessesLeftText = document.getElementById("gesses-left-text");
        guessesLeftText.textContent = guessesLeft;
        // return yourGuessesSoFar;
        
    }
    else {
        losses++;
        var lossesText = document.getElementById("losses-text");
        lossesText.textContent = losses;
        reset();


        
    }
    function reset() {
        guessesLeft = 9;
        yourGuessesSoFar = []; 
        computerAnswer = letterOptions[Math.floor(Math.random() * letterOptions.length)];
        console.log(computerAnswer);
    }


}
