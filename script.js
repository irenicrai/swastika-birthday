const birthday = new Date("August 4, 2026 00:00:00");
const sparklesLayer = document.getElementById("sparklesLayer");

function createSparkles() {
    if (!sparklesLayer) return;

    const sparkleCount = 40;
    const colors = ["#fff7d6", "#ffd6e8", "#ffe4a8", "#ffffff"];

    for (let i = 0; i < sparkleCount; i++) {
        const sparkle = document.createElement("span");
        sparkle.className = "sparkle";

        const size = Math.random() * 6 + 3;
        sparkle.style.width = `${size}px`;
        sparkle.style.height = `${size}px`;
        sparkle.style.left = `${Math.random() * 100}%`;
        sparkle.style.top = `${Math.random() * 100}%`;
        sparkle.style.background = colors[Math.floor(Math.random() * colors.length)];
        sparkle.style.animationDelay = `${Math.random() * 3}s`;
        sparkle.style.animationDuration = `${Math.random() * 2 + 2.5}s`;

        sparklesLayer.appendChild(sparkle);
    }
}

function updateCountdown(){

const now = new Date();
const diff = birthday - now;

const days = Math.floor(diff/(1000*60*60*24));
const hours = Math.floor((diff%(1000*60*60*24))/(1000*60*60));
const minutes = Math.floor((diff%(1000*60*60))/60000);
const seconds = Math.floor((diff%(1000*60))/1000);

document.getElementById("days").innerText = days;
document.getElementById("hours").innerText = hours;
document.getElementById("minutes").innerText = minutes;
document.getElementById("seconds").innerText = seconds;

}

setInterval(updateCountdown,1000);
createSparkles();
updateCountdown();
