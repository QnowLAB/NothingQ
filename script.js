let score = 0;
let size = 40;

const circle = document.getElementById("circle");
const points = document.getElementById("points");

moveCircle();

circle.addEventListener("click", () => {

    score++;
    points.textContent = score;

    if (navigator.vibrate) {
        navigator.vibrate(25);
    }

    size = Math.max(10, size - 1);

    circle.style.width = size + "px";
    circle.style.height = size + "px";

    circle.animate(
        [
            { transform: "scale(1)" },
            { transform: "scale(1.4)" },
            { transform: "scale(1)" }
        ],
        {
            duration: 180
        }
    );

    moveCircle();

    if (score == 10) {
        alert("🎉 Level 2");
    }

});

function moveCircle() {

    const x = Math.random() * (window.innerWidth - size);

    const y = Math.random() * (window.innerHeight - size);

    circle.style.left = x + "px";
    circle.style.top = y + "px";

}