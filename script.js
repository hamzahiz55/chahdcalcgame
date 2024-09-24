const questions = [
   "ena janiourek?",
    "ena akther ensen enti thebou fel denya ?",
    "bech te9ef m3aya ki aloulou bech itaredni mara loula?",
    "mouwasafet fel rajel rajel li kont testana fih l9ithom lkol feya ena wela badelet rayek ki t3refet 3laya  ?",
    "ena el ensen eli kont testana fih wa9et hedha lkol?"
];

const yesMessages = [
    "sahit ya arnoubti!",
    "sahit mechya fel thneya el shiha !",
    "boussa bech tkoun twila barchaaaaaaaaa !"
];

const noMessages = [
    "haw bech nokhrejlek mel tlf!",
    "neghechmek eb ras tawa !",
    "mwachem koleb ou mrabet fe rasi ou jeweb bel ghalet akeka sahit!"
];

let currentQuestion = 0;
let heartSize = 1; // Heart size multiplier
const heart = document.getElementById('heart');
const questionElement = document.getElementById('question');
const resultElement = document.getElementById('result');
const popup = document.getElementById('popup');
const popupMessage = document.getElementById('popup-message');

function startGame() {
    currentQuestion = 0;
    heartSize = 1;
    questionElement.textContent = questions[currentQuestion];
    resultElement.textContent = ''; // Clear the result text
    heart.style.transform = `scale(${heartSize})`;
}

function answerQuestion(isYes) {
    if (isYes) {
        heartSize += 0.2; // Increase heart size
        showPopup(yesMessages[Math.floor(Math.random() * yesMessages.length)]);
    } else {
        heartSize = Math.max(1, heartSize - 0.2); // Decrease heart size, but not below 1
        showPopup(noMessages[Math.floor(Math.random() * noMessages.length)]);
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        questionElement.textContent = questions[currentQuestion];
        heart.style.transform = `scale(${heartSize})`;
    } else {
        endGame();
    }
}

function endGame() {
    const lovePercentage = Math.round((heartSize - 1) / (questions.length - 1) * 100);
    questionElement.textContent = "Your Love Percentage:";
    resultElement.textContent = `${lovePercentage}%`;
    heart.style.transform = `scale(${heartSize})`;
    showRestartButton();
}

function showPopup(message) {
    popupMessage.textContent = message;
    popup.style.display = 'block';
}

function closePopup() {
    popup.style.display = 'none';
}

function showRestartButton() {
    // Create a restart button
    const restartButton = document.createElement('button');
    restartButton.textContent = 'Restart Game';
    restartButton.classList.add('restart-button');
    restartButton.onclick = restartGame;

    // Add the restart button to the game container
    document.querySelector('.game-container').appendChild(restartButton);
}

function restartGame() {
    // Remove the restart button
    const restartButton = document.querySelector('.restart-button');
    if (restartButton) {
        restartButton.remove();
    }

    // Restart the game
    startGame();
}

// Start the game
startGame();
