let max = 500;
let min = 1;
let bomb;
let score = 0;
let steps = 0;

function initGame() {
    bomb = Math.floor(Math.random() * max) + 1;
    updateUI();
}

function setDifficulty() {
    max = Number(document.getElementById("difficulty").value);
    min = 1;
    score = 0;
    steps = 0;

    document.getElementById("historyList").innerHTML = "";

    initGame();
}

function checkGuess() {
    let guess = Number(document.getElementById("guess").value);
    let msg = document.getElementById("message");

    if (guess <= min || guess >= max) {
        msg.textContent = "TARGET OUT OF RANGE";
        return;
    }

    steps++;

    let li = document.createElement("li");
    li.textContent = "Guess: " + guess;
    document.getElementById("historyList").appendChild(li);

    if (guess === bomb) {
        score += 100;
        msg.textContent = "💥 BOMB DETONATED!";
    } else if (guess < bomb) {
        min = guess;
        score -= 10;
        msg.textContent = "LOW SIGNAL";
    } else {
        max = guess;
        score -= 10;
        msg.textContent = "HIGH SIGNAL";
    }

    updateUI();
}

function updateUI() {
    document.getElementById("min").textContent = min;
    document.getElementById("max").textContent = max;
    document.getElementById("score").textContent = score;
    document.getElementById("steps").textContent = steps;
}

function restartGame() {
    location.reload();
}

initGame();
