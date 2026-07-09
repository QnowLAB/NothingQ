let score = 0;

const circle = document.getElementById("circle");
const points = document.getElementById("points");

circle.addEventListener("click", () => {

    score++;

    points.textContent = score;

    const x = Math.random() * (window.innerWidth - 40);

    const y = Math.random() * (window.innerHeight - 40);

    circle.style.left = x + "px";
    circle.style.top = y + "px";

});