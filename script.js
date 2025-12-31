function showCard() {
  document.getElementById("card").innerHTML =
    "🎂 Wishing you joy, love, fireworks, and endless happiness!";
  startConfetti();
  startFireworks();
  playMusic();
  startSlideshow();
}

/* Music */
function playMusic() {
  const music = document.getElementById("bg-music");
  music.play();
}

/* Confetti */
const confettiCanvas = document.getElementById("confetti");
const ctx = confettiCanvas.getContext("2d");
confettiCanvas.width = window.innerWidth;
confettiCanvas.height = window.innerHeight;
let confettiPieces = [];
function startConfetti() {
  for (let i = 0; i < 150; i++) {
    confettiPieces.push({
      x: Math.random() * confettiCanvas.width,
      y: Math.random() * confettiCanvas.height - confettiCanvas.height,
      size: Math.random() * 8 + 2,
      color: `hsl(${Math.random() * 360}, 100%, 50%)`,
      speed: Math.random() * 3 + 1
    });
  }
  animateConfetti();
}
function animateConfetti() {
  ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
  confettiPieces.forEach((p) => {
    p.y += p.speed;
    if (p.y > confettiCanvas.height) p.y = -10;
    ctx.fillStyle = p.color;
    ctx.fillRect(p.x, p.y, p.size, p.size);
  });
  requestAnimationFrame(animateConfetti);
}

/* Fireworks */
const fwCanvas = document.getElementById("fireworks");
const fctx = fwCanvas.getContext("2d");
fwCanvas.width = window.innerWidth;
fwCanvas.height = window.innerHeight;
function startFireworks() {
  setInterval(() => {
    let x = Math.random() * fwCanvas.width;
    let y = Math.random() * fwCanvas.height / 2;
    for (let i = 0; i < 50; i++) {
      fctx.fillStyle = `hsl(${Math.random() * 360}, 100%, 50%)`;
      fctx.beginPath();
      fctx.arc(x, y, Math.random() * 3, 0, Math.PI * 2);
      fctx.fill();
    }
  }, 500);
}

/* Slideshow */
let slideIndex = 0;
function startSlideshow() {
  const slides = document.querySelectorAll(".slide");
  setInterval(() => {
    slides.forEach(s => s.classList.remove("active"));
    slides[slideIndex].classList.add("active");
    slideIndex = (slideIndex + 1) % slides.length;
  }, 2000);
}
