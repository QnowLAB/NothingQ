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

    // phone vibration
    if(navigator.vibrate){
        navigator.vibrate(15);
    }

    // smaller every 10 points
    if(score % 10 === 0){
        size = Math.max(8, size - 2);
    }

    // random color
    circle.style.background =
        `hsl(${Math.random()*360},100%,60%)`;

    // random shape
    if(Math.random() < 0.5){
        circle.style.borderRadius="50%";
    }else{
        circle.style.borderRadius="10%";
    }

    createFireworks();

    moveCircle();

});

function moveCircle(){

    const x = Math.random() * (window.innerWidth - size);

    const y = Math.random() * (window.innerHeight - size);

    circle.style.width = size + "px";
    circle.style.height = size + "px";

    circle.style.left = x + "px";
    circle.style.top = y + "px";

}

function createFireworks(){

    for(let i=0;i<8;i++){

        const p=document.createElement("div");

        p.style.position="absolute";
        p.style.left=circle.style.left;
        p.style.top=circle.style.top;
        p.style.width="8px";
        p.style.height="8px";
        p.style.borderRadius="50%";

        p.style.background=
        `hsl(${Math.random()*360},100%,60%)`;

        document.body.appendChild(p);

        const angle=Math.random()*360;
        const distance=40+Math.random()*40;

        p.animate([
            {transform:"translate(0,0)",opacity:1},
            {
             transform:
             `translate(${Math.cos(angle*Math.PI/180)*distance}px,
             ${Math.sin(angle*Math.PI/180)*distance}px)`,
             opacity:0
            }
        ],{
            duration:500
        });

        setTimeout(()=>p.remove(),500);

    }

}