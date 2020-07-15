// JavaScript source code
let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

//Function to generate random number betweekn 0 and 9
const generateTarget = () => Math.floor(Math.random() * 10);
//Extra Credit: Function to identify absolute distance between guess and target
const getAbsoluteDistance = (guess, target) => Math.abs(guess - target);
//Function to test whether computer or human guess is closest to target
//Original one liner with no correction replaced by the Extra Credit function
//const compareGuesses = (human, computer, target) => getAbsoluteDistance(human, target) <= getAbsoluteDistance(computer, target) ? true : false;
//Extra Credit: Update function to alert() if human guess is out of range 0 to 9 inclusive
//I used modulus 10 to correct invalid entries and make them in range
const compareGuesses = (human, computer, target) => {
    if (human < 0 || human > 9) {
        alert('Invalid entry, must be in range 0 to 9. Modulus value will be used.');
    }
    const correctedHuman = human % 10;
    if (getAbsoluteDistance(correctedHuman, target) <= getAbsoluteDistance(computer, target)) {
        return true;
    } else {
        return false;
    }
}
//Function to update relevant score each round; input will be either 'human' or 'computer'
const updateScore = roundWinner => roundWinner === 'human' ? humanScore++ : computerScore++;
//Function to update round number after each round
const advanceRound = () => currentRoundNumber++;