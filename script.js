let score=0;

let coins=0;

let bestScore=
Number(localStorage.getItem("bestScore"))||0;

document.getElementById("bestScore").textContent=
bestScore;

const game=document.getElementById("game");

const objects=[

{emoji:"😀",type:"good"},

{emoji:"💎",type:"coin"},

{emoji:"⭐",type:"bonus"},

{emoji:"💣",type:"bomb"}

];

spawn();

setInterval(spawn,1200);

function spawn(){

const obj=
objects[
Math.floor(Math.random()*objects.length)
];

const d=document.createElement("div");

d.className="target";

d.textContent=obj.emoji;

d.style.left=
Math.random()*(window.innerWidth-60)+"px";

d.style.top=
120+Math.random()*(window.innerHeight-180)+"px";

game.appendChild(d);

d.onclick=function(){

if(obj.type==="good"){

score++;

}

if(obj.type==="coin"){

coins+=10;

}

if(obj.type==="bonus"){

score+=5;

}

if(obj.type==="bomb"){

score=Math.max(0,score-5);

}

document.getElementById("points").textContent=score;

document.getElementById("coinCount").textContent=coins;

if(score>bestScore){

bestScore=score;

localStorage.setItem("bestScore",bestScore);

document.getElementById("bestScore").textContent=
bestScore;

}

d.remove();

};

setTimeout(()=>{

d.remove();

},1800);

}