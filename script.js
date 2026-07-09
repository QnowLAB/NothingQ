let score = 0;
let coins = 0;
let combo = 1;
let level = 1;

const points = document.getElementById("points");
const coinCount = document.getElementById("coinCount");
const comboText = document.getElementById("combo");
const levelNumber = document.getElementById("levelNumber");
const best = document.getElementById("bestScore");
const game = document.getElementById("game");
const message = document.getElementById("message");
const levelUp = document.getElementById("levelUp");

let bestScore = Number(localStorage.getItem("bestScore")) || 0;
best.textContent = bestScore;

const levels = [

["😀","😎"],

["🐶","🐺"],

["🍎","🍏"],

["⚽","🏀"],

["❤️","🩷"],

["⭐","🌟"],

["🚀","🛸"],

["🟢","🔵"],

["▲","△"],

["■","□"],

["1","7"],

["O","0"]

];

newBoard();

function newBoard(){

game.innerHTML="";

const pair=levels[
(level-1)%levels.length
];

const normal=pair[0];
const odd=pair[1];

const oddIndex=Math.floor(Math.random()*25);

for(let i=0;i<25;i++){

const cell=document.createElement("div");

cell.className="cell";

if(i===oddIndex){

cell.textContent=odd;

cell.onclick=correct;

}else{

cell.textContent=normal;

cell.onclick=wrong;

}

game.appendChild(cell);

}

}

function correct(){

score++;

coins++;

combo++;

points.textContent=score;

coinCount.textContent=coins;

comboText.textContent="x"+combo;

if(score>bestScore){

bestScore=score;

localStorage.setItem("bestScore",bestScore);

best.textContent=bestScore;

}

if(score%5===0){

level++;

levelNumber.textContent=level;

levelUp.textContent="LEVEL "+level;

levelUp.animate(

[

{opacity:0,transform:"translate(-50%,-50%) scale(.5)"},

{opacity:1,transform:"translate(-50%,-50%) scale(1.3)"},

{opacity:0,transform:"translate(-50%,-50%) scale(1)"}

],

{

duration:1200

}

);

}

message.textContent="✅ Correct!";

setTimeout(newBoard,300);

}

function wrong(){

combo=1;

comboText.textContent="x1";

message.textContent="❌ Try Again";

if(navigator.vibrate){

navigator.vibrate(80);

}

}