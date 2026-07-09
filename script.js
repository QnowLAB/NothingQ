let score = 0;
let coins = 0;
let combo = 1;
let level = 1;
let size = 40;


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

plusOne.animate(
[
 {transform:"translateY(0px)",opacity:1},
 {transform:"translateY(-60px)",opacity:0}
],
{
 duration:500
});
    coins++;
    combo++;

    if (score >= level * 10) {
        level++;
        levelNumber.textContent = level;
        alert("Level " + level + "!");
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
}