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
const levelUp = document.getElementById("levelUp");
const plusOne = document.getElementById("plusOne");
const circle = document.getElementById("circle");
const points = document.getElementById("points");
const coinCount = document.getElementById("coinCount");
const comboText = document.getElementById("combo");
const levelNumber = document.getElementById("levelNumber");
const best = document.getElementById("bestScore");

let bestScore = Number(localStorage.getItem("bestScore")) || 0;
best.textContent = bestScore;

moveCircle();

circle.onclick = function () {

    score++;
plusOne.textContent="+1";

plusOne.style.left=circle.style.left;
plusOne.style.top=circle.style.top;
plusOne.style.opacity = "1";

plusOne.animate(
[
    { transform: "translateY(0px)", opacity: 1 },
    { transform: "translateY(-60px)", opacity: 0 }
],
{
    duration: 500
});

setTimeout(() => {
    plusOne.style.opacity = "0";
}, 500);

    coins++;
    combo++;

    if (score >= level * 10) {
        level++;
        levelNumber.textContent = level;
        levelUp.textContent = "LEVEL " + level + "!";

levelUp.animate(
[
    { opacity:0, transform:"translate(-50%,-50%) scale(0.5)" },
    { opacity:1, transform:"translate(-50%,-50%) scale(1.3)" },
    { opacity:0, transform:"translate(-50%,-50%) scale(1)" }
],
{
    duration:1200
});
    }

    points.textContent = score;
    coinCount.textContent = coins;
    comboText.textContent = "Combo x" + combo;

    if (score > bestScore) {
        bestScore = score;
        localStorage.setItem("bestScore", bestScore);
        best.textContent = bestScore;
    }

    if (navigator.vibrate) {
        navigator.vibrate(15);
createSpark();
    }

    size = Math.max(10, size - 0.5);

    circle.style.width = size + "px";
    circle.style.height = size + "px";

    const hue=Math.random()*360;

circle.style.background=
"hsl("+hue+",100%,60%)";

circle.style.boxShadow=
"0 0 35px hsl("+hue+",100%,70%)";

    setTimeout(moveCircle,Math.max(120,600-level*20));
};

function moveCircle() {

    const x = Math.random() * (window.innerWidth - size);
    const y = Math.random() * (window.innerHeight - size);

    circle.style.left = x + "px";
    circle.style.top = y + "px";
circle.textContent =
targets[Math.floor(Math.random()*targets.length)];
}

function createSpark(){

for(let i=0;i<8;i++){

const s=document.createElement("div");

s.style.position="absolute";

s.style.left=circle.style.left;

s.style.top=circle.style.top;

s.style.width="8px";

s.style.height="8px";

s.style.borderRadius="50%";

s.style.background=
"hsl("+Math.random()*360+",100%,60%)";

document.body.appendChild(s);

const angle=Math.random()*360;

const distance=30+Math.random()*40;

s.animate([

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

],{

duration:500

});

setTimeout(()=>{
s.remove();
},500);

}

}