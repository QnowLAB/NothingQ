game.js
shop.js
ui.js
effects.js
config.js

// ======================================
// UI
// ======================================

function updateHUD() {

    points.textContent = gameState.score;

    coinCount.textContent = gameState.coins;

    comboText.textContent = "x" + gameState.combo;

    levelNumber.textContent = gameState.level;

    livesText.textContent = gameState.lives;

    bestScoreText.textContent = gameState.bestScore;

}

function updateBestScore(){

    if(gameState.score > gameState.bestScore){

        gameState.bestScore = gameState.score;

        localStorage.setItem(
            "bestScore",
            gameState.bestScore
        );

    }

    updateHUD();

}