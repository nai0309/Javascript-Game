// $('document').on('click', '.guessSubmit', function () {
//     console.log("aaaa");
// });

const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const guessSubmit = document.querySelector(".guessSubmit");
const guessInput = document.querySelector(".guessInput");

let guessCount = 1;
let resetBtn;

// guessInput.focus();

let randomNum = Math.floor(Math.random() * 100) + 1;
function numCheck() {
    // 不使用Number()的話，guessInput.value會是字串
    var playerGuess = Number(guessInput.value);
    if (guessCount === 1) {
        guesses.textContent = "Previous guesses: ";
    }
    guesses.textContent += playerGuess + ", ";

    if (playerGuess === randomNum) {
        lastResult.textContent = "Bingo!";
        lastResult.style.background = "green";
        lowOrHi.textContent = "";
        gameOver();
    } else if (guessCount === 10) {
        lastResult.textContent = "Game Over!!!";
        lastResult.style.background = "red";
        gameOver();
    } else { 
        lastResult.textContent = "Wrong!";
        lastResult.style.background = "red";
        if (playerGuess > 100 || playerGuess < 0) {
            lowOrHi.textContent = "Please guess between 1 and 100!";
        } else {
            if (playerGuess > randomNum) {
                lowOrHi.textContent = "Last guess was too high!";
            } else if (playerGuess < randomNum) {
                lowOrHi.textContent = "Last guess was too low!";
            }
        } 
    }
    guessCount++;
    guessInput.value = "";
    guessSubmit.addEventListener("click", numCheck);
};

function gameOver() { 
    guessInput.disabled = true;
    guessSubmit.disabled = true;
    resetBtn = document.createElement("button");
    resetBtn.textContent = "Start new game";
    document.getElementsByClassName("resultParas")[0].appendChild(resetBtn);
    resetBtn.addEventListener("click", resetGame);
};

function resetGame() { 
    guessInput.disabled = false;
    guessSubmit.disabled = false;
    guessCount = 1;
    var resetParas = document.querySelectorAll(".resultParas p");
    for (var i = 0; i < resetParas.length; i++) { 
        resetParas[i].textContent = "";
    }
    resetBtn.remove("resetBtn");
    guessInput.textContent = "";
    lastResult.style.background = "white";
    randomNum = Math.floor(Math.random() * 100) + 1;
};

guessSubmit.addEventListener("click", numCheck);
guessInput.addEventListener("keyup", function (event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        guessSubmit.click();
    }
});