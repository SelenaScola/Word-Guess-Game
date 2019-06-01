

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


    yourGuessesSoFar.push(ueserAnswer);
    // display yourGuessesSoFar to page with getElementById and .textContent
    


    if (ueserAnswer === computerAnswer) {
        wins++;
        var winsText = document.getElementById("wins-text");
        winsText.textContent = wins;
        // winsText.textContent = wins; /prints the text to the dom
 
        // wins = wins + 1
    } else if (guessesLeft > 0) {
        return;
    }
    else {
        losses++;
        var lossesText = document.getElementById("losses-text");
        lossesText.textContent = losses;
    }
    


//     // print win or loose, and always uessesSoFar
// // Determines which key was presse

//     for (var i = 0; i = yourGuessesSoFar.length; i++) {
//         // if (answer = ueserGuess 
//         // for loop (still figuring our how to correctly formulate the opperation)
//     }
//     // is the output of the computer that will need a for loop.
//     var computerGuess = AssignRandomLetter;
//     // assign random leter from letter options to the computer guess
//     var assignRandomLetter = indexOf.letterOptions;

//     // someThing.someWhere[i];

//     // compare userGuess to computer guess === win yay!
//     if (ueserAnswe === computerAnswer) {
//         var winsText = document.getElementById("wins-text");
//         winsText.textContent = "hello"
//         // incermint wins
//         var wins = wins++
//         // add wins to "P" htmlm tag
//         // reset remaining guesses to 9
//         remainingGuess + 9;
//         // reassign new computer guess
//     }

//     else {
//         losses++
//         lossesText = document.getElementById("losses-text");


//         text(letters[i]);


//     } if (options.indexOf(yourGuessesSoFar) > -1) {

//         function updateScore() {
//             document.querySelector("#score").innerHTML = "Score: " + score;
//         }
        

//         // (# of times the user has guessed the letter correctly)

      
//     };
}
  
  