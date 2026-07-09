let score = 0;
let coins = 0;
let combo = 1;
let level = 1;
let size = 40;

const targets = [
    {icon:"😀",points:1},
    {icon:"⭐",points:5},
    {icon:"💎",points:20},
    {icon:"👑",points:50},
    {icon:"💣",points:-10},
    {icon:"❤️",points:0},
    {icon:"🪙",points:2},
    {icon:"⚡",points:3}
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

let currentTarget;

moveCircle();

let autoMove = setInterval(moveCircle,1000);

circle.onclick = function(){

    if(currentTarget.points>0){

        score += currentTarget.points;
        coins += currentTarget.points;

    }else if(currentTarget.icon==="💣"){

        coins=Math.max(0,coins-10);

    }else if(currentTarget.icon==="❤️"){

        combo+=5;

    }

    combo++;

    plusOne.textContent =
        (currentTarget.points>0)?
        "+"+currentTarget.points:
        currentTarget.icon;

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

    while(score>=level*25){

        level++;

        levelNumber.textContent=level;

        levelUp.textContent="LEVEL "+level+"!";

        levelUp.animate(
        [
            {opacity:0,transform:"translate(-50%,-50%) scale(.5)"},
            {opacity:1,transform:"translate(-50%,-50%) scale(1.3)"},
            {opacity:0,transform:"translate(-50%,-50%) scale(1)"}
        ],
        {
            duration:1200
        });

        clearInterval(autoMove);

        let speed=Math.max(250,1000-level*50);

        autoMove=setInterval(moveCircle,speed);

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

    createSpark();

    size=Math.max(18,size-0.3);

    circle.style.width=size+"px";
    circle.style.height=size+"px";

    moveCircle();

};

function moveCircle(){

    const x=Math.random()*(window.innerWidth-size);

    const y=Math.random()*(window.innerHeight-size);

    circle.style.left=x+"px";
    circle.style.top=y+"px";

    currentTarget=
    targets[Math.floor(Math.random()*targets.length)];

    circle.textContent=currentTarget.icon;

    circle.style.background="transparent";
    circle.style.boxShadow="0 0 25px rgba(255,255,255,.6)";

}

function createSpark(){

    for(let i=0;i<20;i++){

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

        const distance=40+Math.random()*80;

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
        });

        setTimeout(()=>{

            s.remove();

        },500);

    }

}