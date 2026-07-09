let score = 0;
let size = 40;

const circle = document.getElementById("circle");
const points = document.getElementById("points");
const best = document.getElementById("bestScore");

let bestScore = localStorage.getItem("bestScore") || 0;
best.textContent = bestScore;

moveCircle();

circle.addEventListener("click", () => {

    score++;
    points.textContent = score;

    if(score > bestScore){
        bestScore = score;
        localStorage.setItem("bestScore", bestScore);
        best.textContent = bestScore;
    }

    if(navigator.vibrate){
        navigator.vibrate(20);
    }

    size = Math.max(10, size - 1);

    circle.style.width = size + "px";
    circle.style.height = size + "px";

    circle.style.background =
        "hsl(" + (Math.random()*360) + ",100%,60%)";

    createSpark();

    moveCircle();

});

function moveCircle(){

    const x = Math.random() * (window.innerWidth - size);
    const y = Math.random() * (window.innerHeight - size);

    circle.style.left = x + "px";
    circle.style.top = y + "px";

}

function createSpark(){

    const s = document.createElement("div");

    s.style.position = "absolute";
    s.style.left = circle.style.left;
    s.style.top = circle.style.top;
    s.style.width = "12px";
    s.style.height = "12px";
    s.style.borderRadius = "50%";
    s.style.background = "yellow";

    document.body.appendChild(s);

    s.animate(
    [
        {transform:"scale(1)",opacity:1},
        {transform:"scale(8)",opacity:0}
    ],
    {
        duration:400
    });

    setTimeout(()=>{
        s.remove();
    },400);

}