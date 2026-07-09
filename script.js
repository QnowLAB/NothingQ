let score = 0;

let coins = 0;

let combo = 1;

let level = 1;

let size = 40;

const circle = document.getElementById("circle");

const points = document.getElementById("points");

const coinCount = document.getElementById("coinCount");

const comboText = document.getElementById("combo");

const levelNumber = document.getElementById("levelNumber");

const best = document.getElementById("bestScore");

let bestScore = localStorage.getItem("bestScore") || 0;

best.textContent = bestScore;

moveCircle();

circle.onclick=function(){

score++;

coins++;

combo++;

if(score>=level*10){

level++;

levelNumber.textContent=level;

alert("🎉 Level "+level);

}

points.textContent=score;

coinCount.textContent=coins;

comboText.textContent="🔥 Combo x"+combo;

if(score>bestScore){

bestScore=score;

localStorage.setItem("bestScore",bestScore);

best.textContent=bestScore;

}

if(navigator.vibrate){

navigator.vibrate(15);

}

size=Math.max(10,size-0.5);

circle.style.width=size+"px";

circle.style.height=size+"px";

circle.style.background=

`hsl(${Math.random()*360},100%,60%)`;

moveCircle();

};

function moveCircle(){

const x=Math.random()*(window.innerWidth-size);

const y=Math.random()*(window.innerHeight-size);

circle.style.left=x+"px";

circle.style.top=y+"px";

}