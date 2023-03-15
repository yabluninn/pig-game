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
const playerNameOne = document.querySelector(".pl-one-name");
const playerNameTwo = document.querySelector(".pl-two-name");

const menu = document.querySelector(".menu");

menu.style.display = "flex";

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
  totalScoreOne.textContent = totalScores[0];
  totalScroreTwo.textContent = totalScores[1];
  currentScoreOne.textContent = currentScores[0];
  currentScoreTwo.textContent = currentScores[1];
  const rollButton = document.querySelector(".roll-dice-btn");
  rollButton.addEventListener("click", rollDice);
};

const newGameButton = document.querySelector(".new-game-btn");
newGameButton.addEventListener("click", function () {
  menu.style.display = "flex";
});

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
  switch (rand) {
    case 1:
      diceImage.src = "https://files.fm/thumb_show.php?i=xannc4s3c";
      break;
    case 2:
      diceImage.src = "https://files.fm/thumb_show.php?i=rfcn4zxxr";
      break;
    case 3:
      diceImage.src = "https://files.fm/thumb_show.php?i=gpqw3f5md";
      break;
    case 4:
      diceImage.src = "https://files.fm/thumb_show.php?i=zaq57dq7b";
      break;
    case 5:
      diceImage.src = "https://files.fm/thumb_show.php?i=ezbkws2k2";
      break;
    case 6:
      diceImage.src = "https://files.fm/thumb_show.php?i=e57cwey7t";
      break;
  }
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

const setDefaultCheckboxOne = document.querySelector(
  ".set-default-name-pl-one"
);
const setDefaultCheckboxTwo = document.querySelector(
  ".set-default-name-pl-two"
);
const playerNameOneInput = document.querySelector(".player-one-input");
const playerNameTwoInput = document.querySelector(".player-two-input");

setDefaultCheckboxOne.addEventListener("change", function () {
  if (this.checked) {
    playerNameOneInput.value = "Player 1";
    playerNameOneInput.disabled = true;
  } else {
    playerNameOneInput.value = "";
    playerNameOneInput.disabled = false;
  }
});

setDefaultCheckboxTwo.addEventListener("change", function () {
  if (this.checked) {
    playerNameTwoInput.value = "Player 2";
    playerNameTwoInput.disabled = true;
  } else {
    playerNameTwoInput.value = "";
    playerNameTwoInput.disabled = false;
  }
});

const playButton = document.querySelector(".play-btn");
playButton.addEventListener("click", function (event) {
  if ((playerNameOneInput.value != "") & (playerNameTwoInput.value != "")) {
    playerNameOne.textContent = playerNameOneInput.value;
    playerNameTwo.textContent = playerNameTwoInput.value;
    menu.style.display = "none";
    startNewGame();
    event.preventDefault();
  } else {
    event.preventDefault();
  }
});

diceImage.ondragstart = () => {
  return false;
};

startNewGame();
