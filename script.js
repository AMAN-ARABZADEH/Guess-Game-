"use strict";
/*
        Auther: Aman Arabzadeh
        Fun game, guess my number!! 
        build it to play with my niece.
*/

const msg = document.querySelector(".message");
const score = document.querySelector(".score");
const btn = document.querySelector(".check");
const again = document.querySelector(".again");
const highscore = document.querySelector(".highscore");
const guessInput = document.querySelector(".guess");

let limitScore = 23;
let highestScore = 0;

const generateRandomNumber = () => Math.trunc(Math.random() * 23) + 1;

let randNumber = generateRandomNumber();


const displayMessage = (message) => {
    msg.textContent = message;
};

again.addEventListener("click", () => {
    limitScore = 23;
    score.textContent = limitScore;
    guessInput.value = "";
    displayMessage("Start Guessing...");
    randNumber = generateRandomNumber();
    console.log(randNumber);
});



btn.addEventListener("click", () => {
    const input = Number(guessInput.value);

    if (!input) {
        displayMessage("No Valid Number!");
    } else if (randNumber === input) {
        displayMessage("Correct Number! Woo-hoo!");

        if (limitScore > highestScore) {
            highestScore = limitScore;
            highscore.textContent = highestScore;
        }
        document.body.style.backgroundColor = "green";
    } else if (input > randNumber || input < randNumber) {
        if (limitScore > 1) {
            const direction = input > randNumber ? "High" : "Low";
            displayMessage(`Too ${direction}!`);
            limitScore--;
            score.textContent = limitScore;
        } else {
            displayMessage("You lost the game!");
            score.textContent = 0;
        }
    }
});

