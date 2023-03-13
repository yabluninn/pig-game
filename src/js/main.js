import "../scss/style.scss";
("use strict");

let totalScores = [0, 0];
let currentScores = [0, 0];

let currentPlayerId = 0;

const playerOne = document.querySelector(".pl-one");
const playerTwo = document.querySelector(".pl-two");
const totalScoreOne = document.querySelector(".pl-one-ts");
const totalScroreTwo = document.querySelector(".pl-two-ts");
const currentScoreOne = document.querySelector(".pl-one-cs");
const currentScoreTwo = document.querySelector(".pl-two-cs");
const diceImage = document.querySelector(".dice-img");

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const updateScoreText = () => {
  totalScoreOne.textContent = totalScores[0];
  totalScroreTwo.textContent = totalScores[1];
  if (currentPlayerId === 0) {
    currentScoreOne.textContent = currentScores[0];
  } else if (currentPlayerId === 1) {
    currentScoreTwo.textContent = currentScores[1];
  }
};

const startNewGame = () => {
  currentPlayerId = 0;
  totalScores[0] = 0;
  totalScores[1] = 0;
  currentScores[0] = 0;
  currentScores[1] = 0;
  playerOne.classList.add("current");
  playerTwo.classList.remove("current");
  currentScoreOne.textContent = currentScores[0];
  currentScoreTwo.textContent = currentScores[1];
  const rollButton = document.querySelector(".roll-dice-btn");
  rollButton.addEventListener("click", rollDice);
};

const newGameButton = document.querySelector(".new-game-btn");
newGameButton.addEventListener("click", startNewGame);

const switchCurrentPlayer = () => {
  if (currentPlayerId === 0) {
    currentPlayerId = 1;
    playerTwo.classList.add("current");
    playerOne.classList.remove("current");
  } else if (currentPlayerId === 1) {
    currentPlayerId = 0;
    playerOne.classList.add("current");
    playerTwo.classList.remove("current");
  }
};

const rollDice = () => {
  let rand = randomInt(1, 6);
  diceImage.src = `public/images/dice${rand}.png`;
  if (rand != 1) {
    currentScores[currentPlayerId] += rand;
    updateScoreText();
  } else if (rand === 1) {
    currentScores[currentPlayerId] = 0;
    updateScoreText();
    switchCurrentPlayer();
  }
};

const leftScore = () => {
  if (currentScores[currentPlayerId] > 0) {
    totalScores[currentPlayerId] += currentScores[currentPlayerId];
    currentScores[currentPlayerId] = 0;
    updateScoreText();
    switchCurrentPlayer();
  }
};

const leftScoreButton = document.querySelector(".left-score-btn");
leftScoreButton.addEventListener("click", leftScore);

diceImage.ondragstart = () => {
  return false;
};

startNewGame();
