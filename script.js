const game = document.getElementById("game");

const points = document.getElementById("points");
const coinCount = document.getElementById("coinCount");
const bestScoreText = document.getElementById("bestScore");
const levelNumber = document.getElementById("levelNumber");
const comboText = document.getElementById("combo");
const livesText = document.getElementById("lives");

const plusOne = document.getElementById("plusOne");
const levelUp = document.getElementById("levelUp");

// Game Over Elements
const gameOverModal = document.getElementById("gameOverModal");
const finalScoreText = document.getElementById("finalScore");
const bestScoreFinalText = document.getElementById("bestScoreFinal");
const restartBtn = document.getElementById("restartBtn");

// Game State Variables
let score = 0;
let coins = 0;
let combo = 1;
let level = 1;
let lives = 3;
let gameActive = true;

let bestScore =
Number(localStorage.getItem("bestScore")) || 0;

bestScoreText.textContent = bestScore;

const targets = [

  {icon:"😀",points:1},
  {icon:"⭐",points:5},
  {icon:"💎",points:20},
  {icon:"👑",points:50},
  {icon:"🪙",points:2},
  {icon:"⚡",points:3},
  {icon:"❤️",points:0},
  {icon:"💣",points:-10}

];

const target = document.createElement("div");

target.className="target";

game.appendChild(target);

let current;

moveTarget();

let speed = 1000;

let timer = setInterval(moveTarget,speed);

function moveTarget(){

  // If game is over, don't move target anymore
  if(!gameActive) return;

  // Check if previous target was missed (not clicked)
  if(current && gameActive){
    removeLive();
  }

  const x =
  Math.random()*(window.innerWidth-70);

  const y =
  120+Math.random()*(window.innerHeight-220);

  target.style.left=x+"px";
  target.style.top=y+"px";

  current =
  targets[Math.floor(Math.random()*targets.length)];

  target.textContent=current.icon;

}

target.onclick=function(){

  // Ignore clicks if game is over
  if(!gameActive) return;

  if(current.points>0){

    score+=current.points;
    coins+=current.points;

    showFloat("+"+current.points);

  }

  else if(current.icon==="💣"){

    // Bomb: Remove a life AND apply penalty
    removeLive();
    coins=Math.max(0,coins-10);

    showFloat("-10");

  }

  else if(current.icon==="❤️"){

    combo+=5;

    showFloat("❤️");

  }

  combo++;

  points.textContent=score;
  coinCount.textContent=coins;
  comboText.textContent="x"+combo;

  if(score>bestScore){

    bestScore=score;

    localStorage.setItem(
      "bestScore",
      bestScore
    );

    bestScoreText.textContent=bestScore;

  }

  while(score>=level*25){

    level++;

    levelNumber.textContent=level;

    speed=Math.max(250,speed-70);

    clearInterval(timer);

    timer=setInterval(moveTarget,speed);

    levelUp.textContent=
    "LEVEL "+level+"!";

    levelUp.animate(

      [
        {
          opacity:0,
          transform:"translate(-50%,-50%) scale(.5)"
        },

        {
          opacity:1,
          transform:"translate(-50%,-50%) scale(1.4)"
        },

        {
          opacity:0,
          transform:"translate(-50%,-50%) scale(1)"
        }

      ],

      {
        duration:1200
      }

    );

  }

  if(navigator.vibrate){

    navigator.vibrate(20);

  }

  createSpark();

  moveTarget();

};

function showFloat(text){

  plusOne.textContent=text;

  plusOne.style.left=target.style.left;

  plusOne.style.top=target.style.top;

  plusOne.animate(

    [
      {
        transform:"translateY(0px)",
        opacity:1
      },

      {
        transform:"translateY(-60px)",
        opacity:0
      }

    ],

    {
      duration:500
    }

  );

}

function createSpark(){

  for(let i=0;i<18;i++){

    const s=document.createElement("div");

    s.className="spark";

    s.style.left=target.style.left;

    s.style.top=target.style.top;

    s.style.background=
    "hsl("+Math.random()*360+",100%,60%)";

    document.body.appendChild(s);

    const angle=Math.random()*360;

    const distance=30+Math.random()*60;

    s.animate(

      [
        {
          transform:"translate(0,0)",
          opacity:1
        },

        {
          transform:
          "translate("
          +(Math.cos(angle*Math.PI/180)*distance)
          +"px,"
          +(Math.sin(angle*Math.PI/180)*distance)
          +"px)",
          opacity:0
        }

      ],

      {
        duration:500
      }

    );

    setTimeout(()=>{

      s.remove();

    },500);

  }

}

// Lives System Functions
function removeLive(){
  if(lives > 0){
    lives--;
    livesText.textContent = lives;
  }

  if(lives === 0){
    endGame();
  }
}

function endGame(){
  gameActive = false;
  clearInterval(timer);

  // Show game over modal
  finalScoreText.textContent = score;
  bestScoreFinalText.textContent = bestScore;
  gameOverModal.classList.remove("hidden");
}

function restartGame(){
  // Reset game variables (except bestScore)
  score = 0;
  coins = 0;
  combo = 1;
  level = 1;
  lives = 3;
  gameActive = true;
  speed = 1000;

  // Update UI
  points.textContent = score;
  coinCount.textContent = coins;
  comboText.textContent = "x" + combo;
  levelNumber.textContent = level;
  livesText.textContent = lives;

  // Hide game over modal
  gameOverModal.classList.add("hidden");

  // Reset game loop
  clearInterval(timer);
  timer = setInterval(moveTarget, speed);

  // Move target to start
  moveTarget();
}

// Restart button event listener
restartBtn.addEventListener("click", restartGame);
