let score = 0;
let coins = 0;
let combo = 1;
let level = 1;
let size = 40;

const targets = [
"😀","😎","🤖","👻",
"🐶","🐱","🐼","🦁",
"🍎","🍌","🍓","🍇",
"⚽","🏀","🎾",
"🚀","✈️","🚗",
"❤️","⭐","💎","🪙",
"₿","●","▲","■"
];

const circle = document.getElementById("circle");
const points = document.getElementById("points");
const coinCount = document.getElementById("coinCount");
const comboText = document.getElementById("combo");
const levelNumber = document.getElementById("levelNumber");
const best = document.getElementById("bestScore");
const plusOne = document.getElementById("plusOne");
const levelUp = document.getElementById("levelUp");
const themeBtn = document.getElementById("themeBtn");

let bestScore = Number(localStorage.getItem("bestScore")) || 0;
best.textContent = bestScore;

let rainbowUnlocked =
localStorage.getItem("rainbowUnlocked") === "true";

if(rainbowUnlocked){

    themeBtn.textContent="✅ Rainbow Theme Unlocked";

    startRainbow();

}

moveCircle();

themeBtn.onclick=function(){

    if(rainbowUnlocked){

        alert("Already unlocked!");

        return;

    }

    if(coins<100){

        alert("You need 100 coins!");

        return;

    }

    coins-=100;

    coinCount.textContent=coins;

    rainbowUnlocked=true;

    localStorage.setItem("rainbowUnlocked","true");

    themeBtn.textContent="✅ Rainbow Theme Unlocked";

    startRainbow();

};

circle.onclick=function(){

    score++;
    coins++;
    combo++;

    points.textContent=score;
    coinCount.textContent=coins;
    comboText.textContent="🔥 Combo x"+combo;

    plusOne.textContent="+1";
    plusOne.style.left=circle.style.left;
    plusOne.style.top=circle.style.top;
    plusOne.style.opacity="1";

    plusOne.animate(
    [
        {transform:"translateY(0px)",opacity:1},
        {transform:"translateY(-60px)",opacity:0}
    ],
    {
        duration:500
    });

    setTimeout(()=>{
        plusOne.style.opacity="0";
    },500);

    if(score>=level*10){

        level++;

        levelNumber.textContent=level;

        levelUp.textContent="LEVEL "+level+"!";

        levelUp.animate(
        [
            {
                opacity:0,
                transform:"translate(-50%,-50%) scale(.5)"
            },
            {
                opacity:1,
                transform:"translate(-50%,-50%) scale(1.3)"
            },
            {
                opacity:0,
                transform:"translate(-50%,-50%) scale(1)"
            }
        ],
        {
            duration:1200
        });

    }

    if(score>bestScore){

        bestScore=score;

        localStorage.setItem("bestScore",bestScore);

        best.textContent=bestScore;

    }

    if(navigator.vibrate){

        navigator.vibrate(15);

    }

    createSpark();

    size=Math.max(10,size-0.5);

    circle.style.width=size+"px";
    circle.style.height=size+"px";

    moveCircle();

};

function moveCircle(){

    const x=Math.random()*(window.innerWidth-size);

    const y=Math.random()*(window.innerHeight-size);

    circle.style.left=x+"px";

    circle.style.top=y+"px";

    const target=
    targets[Math.floor(Math.random()*targets.length)];

    circle.textContent=target;

    if(target==="●"){

        circle.style.background="white";

    }else{

        circle.style.background="transparent";

    }

}

function createSpark(){

    for(let i=0;i<20;i++){

        const s=document.createElement("div");

        s.style.position="absolute